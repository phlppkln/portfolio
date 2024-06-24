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

const countries = ref([String]);

const country = ref(countries.value[0]);
watch(country, async () => {
  const data = await getData();
  updateChartData(data);
});

interface DataPoint {
  Country: String;
  Value: NumberValue;
  Year: NumberValue;
}

const dataSource = ref<DataPoint[]>([]);

const getData = async () => {
  const data = await prepareData();
  const dataCountry = data.get(country.value);

  // convert dataIndia.Value and dataIndia.Year from string to number and remove "Country or Area"
  let dataConverted: DataPoint[] = [];
  if(dataCountry){

  
  dataCountry.forEach((d) => {
    let dataPoint: DataPoint = {
      Country: "",
      Value: 0,
      Year: 0,
    };
    dataPoint.Value = +d.Value;
    dataPoint.Year = +d.Year;
    dataConverted.push(dataPoint);
  });

  dataSource.value = dataConverted;
  return dataConverted;}
};

const prepareData = async () => {
  const data = await d3.csv("/data/UNdata_Export_20240623_internet-usage.csv");

  // convert data to Datapoint interface
  let dataConverted: DataPoint[] = [];
  data.forEach((d) => {
    let dataPoint: DataPoint = {
      Country: "",
      Value: 0,
      Year: 0,
    };
    dataPoint.Country = d["Country or Area"];
    dataPoint.Value = +d.Value;
    dataPoint.Year = +d.Year;
    dataConverted.push(dataPoint);
  });

  let groupedData = d3.group(dataConverted, (d) => d.Country);

  countries.value= Array.from(groupedData.keys());
  return groupedData;
};

const updateChartData = async (data: DataPoint[]) => {
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

const continentAfrica = [
  "Angola",
  "Algeria",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Cabo Verde",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo (Republic of the)",
  "Côte d'Ivoire",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Reunion",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Swaziland",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Western Sahara",
  "Zambia",
  "Zimbabwe",
]

const continentEurope= [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Faroe Islands",
  "Finland",
  "France",
  "Germany",
  "Gibralatar",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russian Federation",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "Vatican",
];

const continentNorthernAmerica = [
  "Bermuda",
  "Canada",
  "Greenland",
  "Saint Pierre and Miquelon",
  "United States",
]

const continentCentralAmerica = [
  "Belize",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Mexico",
  "Nicaragua",
  "Panama"
];

const continentCaribbean = [
  "Anguilla",
  "Antigua and Barbuda",
  "Aruba",
  "Bahamas",
  "Barbados",
  "British Virgin Islands",
  "Cayman Islands",
  "Cuba",
  "Curacao",
  "Dominica",
  "Dominican Republic",
  "Grenada",
  "Guadeloupe",
  "Haiti",
  "Jamaica",
  "Martinique",
  "Montserrat",
  "Puerto Rico",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Trinidad and Tobago",
  "Turks and Caicos Islands",
  "United States Virgin Islands",
]

const continentSouthAmerica = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Falkland (Malvinas) Islands",
  "French Guiana",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
];

const continentOceania = [
  "Australia",
  "Cook Islands",
  "Fiji",
  "French Polynesia",
  "Guam",
  "Kiribati",
  "Marshall Islands",
  "Micronesia",
  "Nauru",
  "New Caledonia",
  "New Zealand",
  "Niue",
  "Northern Marianas",
  "Palau",
  "Papua New Guinea",
  "Samoa",
  "Solomon Islands",
  "Tokelau",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
  "Wallis and Futuna",
];

const continentAsia = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei Darussalam",
  "Cambodia",
  "China",
  "China, Hong Kong Special Administrative Region",
  "China, Macao Special Administrative Region",
  "Cyprus",
  "Democratic People's Republic of Korea",
  "East Timor",
  "Georgia",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Korea (Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "Oman",
  "Pakistan",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "State of Palestine",
  "Syrian Arab Republic",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Türkiye",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Viet Nam",
  "Yemen",
];

</script>

<style scoped lang="scss"></style>
