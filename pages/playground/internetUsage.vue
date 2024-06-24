<template>
  <div class="container">
    <h1>Percentage of individuals using the internet</h1>
    <p>
      D3 experiments to visualize the percentage of individuals using the
      internet from UN data (<a
        href="http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU"
        target="_blank"
        >http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU</a
      >)
    </p>
    <!-- selector for country -->

    <h2>Data</h2>
    <div class="data-source" style="margin-top: 2rem">
      <p><strong>Country: </strong>{{ country }}</p>
      <p><strong>Data: </strong><br>{{ dataSource }}</p>
    </div>

    <h2>Chart</h2>
    <USelect v-model="country" :options="countries" placeholder="Search...">
      <template #leading>
        <UIcon name="i-heroicons-flag" class="w-5 h-5" /> Search... </template
      >/>
    </USelect>

    <div class="scene-container">
      <div ref="chart"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as d3 from "d3";
import type { NumberValue } from "d3";

const chart = ref<HTMLElement | null>(null);

const countries = ["United States", "Canada", "Mexico", "India"];

const country = ref(countries[0]);
watch(country, async () => {
  const data = await getData();
  updateChartData(data);
});

interface DataPoint {
  Value: NumberValue;
  Year: NumberValue;
}

const dataSource = ref<DataPoint[]>([]);

const getData = async () => {
  const data = await d3.csv("/data/UNdata_Export_20240623_internet-usage.csv");

  // extract data where "Country or Area" is selected country
  const dataCountry = data.filter(
    (d) => d["Country or Area"] === country.value
  );

  // convert dataIndia.Value and dataIndia.Year from string to number and remove "Country or Area"
  let dataConverted: DataPoint[] = [];
  dataCountry.forEach((d) => {
    let dataPoint: DataPoint = {
      Value: 0,
      Year: 0,
    };
    dataPoint.Value = +d.Value;
    dataPoint.Year = +d.Year;
    dataConverted.push(dataPoint);
  });

  dataSource.value = dataConverted;
  return dataConverted;
};


const updateChartData = async (data) => {
  // Declare the chart dimensions and margins.
  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  const yearMin = 1990;
  const yearMax = 2025;

  // Declare the x (horizontal position) scale.
  const x = d3
    .scaleLinear()
    .domain([yearMin, yearMax])
    .range([marginLeft, width - marginRight])
    .nice();

  // Declare the y (vertical position) scale.
  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop])
    .nice();
    

  const line = d3
    .line()
    .x((d) => x(d.Year))
    .y((d) => y(d.Value));

  // Create the SVG container.
  const svg = d3.select(chart.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Add the x-axis.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickFormat((d) => String(d)));

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Percentage of individuals using the internet (%)")
    );

    svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line(data));
};

onMounted(async () => {
  const data = await getData();
  updateChartData(data);
});
</script>

<style scoped lang="scss"></style>
