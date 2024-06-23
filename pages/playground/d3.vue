<template>
    <div class="container">
        <h1>Percentage of individuals using the internet</h1>
        <p>D3 experiments to visualize the percentage of individuals using the internet from UN data (<a href="http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU" target="_blank">http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU</a>)
        </p>

        <div class="scene-container">
            <div ref="chart"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const chart = ref<HTMLElement | null>(null)


onMounted(async () => {
const data = await d3.csv("/data/UNdata_Export_20240623_internet-usage.csv");

// extract data where "Country or Area" is India
// dataIndia is an array of objects
const dataIndia = data.filter(d => d["Country or Area"] === "India");

// convert dataIndia.Value and dataIndia.Year from string to number and remove "Country or Area"
dataIndia.forEach(d => {
  d.Value = +d.Value;
  d.Year = +d.Year;
  delete d["Country or Area"];
  delete d["Value Footnotes"];
});


// Declare the chart dimensions and margins.
  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleLinear(d3.extent(dataIndia, d => d.Year), [marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear([0, d3.max(dataIndia, d => d.Value)], [height - marginBottom, marginTop]);

  // Declare the line generator.
  const line = d3.line()
      .x(d => x(d.Year))
      .y(d => y(d.Value));

  // Create the SVG container.
  const svg = d3.select(chart.value)
      .append('svg')
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Add the x-axis.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.2))
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("Percentage of individuals using the internet (%)"));

  // Append a path for the line.
  svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line(dataIndia));

})
</script>

<style scoped lang="scss"></style>