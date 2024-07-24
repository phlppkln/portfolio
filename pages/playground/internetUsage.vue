<template>
  <div class="container">
    <h1>Percentage of individuals using the internet</h1>
    <p>
      D3 experiments to visualize the percentage of individuals using the
      internet from UN data (<a
        href="http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU"
        target="_blank"
        >http://data.un.org/Data.aspx?d=ITU&f=ind1Code%3aI99H#ITU</a
      > & <a href="http://data.un.org/Data.aspx?q=gdp&d=SNAAMA&f=grID%3a101%3bcurrID%3aUSD%3bpcFlag%3a1" target="_blank">http://data.un.org/Data.aspx?q=gdp&d=SNAAMA&f=grID%3a101%3bcurrID%3aUSD%3bpcFlag%3a1</a>) 
      and <a href="https://ourworldindata.org/happiness-and-life-satisfaction" target="_blank">https://ourworldindata.org/happiness-and-life-satisfaction</a>
    </p>

    <h2>Chart</h2>
    <USelect v-model="selectedCountry" :options="countries" placeholder="Search...">
      <template #leading>
        <UIcon name="i-heroicons-flag" class="w-5 h-5" /> Search countries... </template
      >/>
    </USelect>

    
    <USelect v-model="selectedContinent" :options="continents" placeholder="Search..." style="margin-top: 1rem; margin-bottom: 2rem">
      <template #leading>
        <UIcon name="i-heroicons-flag" class="w-5 h-5" /> Search continents... </template
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

import { CountryData, type YearValue } from "@/components/playground/types/dataInterfaces"

const chart = ref<HTMLElement | null>(null);
const countries = ref<string[]>([]);
const continents = ref<string[]>([]);
const selectedCountry = ref(countries.value[0]);
const selectedContinent = ref(continents.value[0]);


const data: CountryData[] = [];

watch(selectedCountry, async () => {
  console.log(data)
  const rawData = data.filter((d) => d.name === selectedCountry.value);
  const visData: DataPointVisualization[] = [];
  rawData.forEach((myData: CountryData) => {
    if(myData.name == selectedCountry.value) {
      myData.years.forEach((myYears) => {
        let entry: DataPointVisualization = {year: 0, lifeSatisfaction: 0, gdp: 0, internetUsage: 0};
        if(myYears.year != null){
          entry.year = myYears.year
        }
        if(myYears.lifeSatisfaction != null){
          entry.lifeSatisfaction = myYears.lifeSatisfaction
        }
        if(myYears.gdp != null){
          entry.gdp = myYears.gdp
        }
        if(myYears.internetUsage != null){
          entry.internetUsage = myYears.internetUsage
        }
      visData.push(entry);
      })
    }
  });


  const dataStats: DataStats | undefined= getDataStats(visData);
  if(dataStats == undefined) {alert('Data not found'); return}
  updateChartData(visData, dataStats);
});

watch(selectedContinent, async () => {
  console.log(selectedContinent.value);
})


interface DataPointVisualization {
  year: number;
  lifeSatisfaction: number;
  gdp: number;
  internetUsage: number;
}


interface DataStats {
  yearMin: number;
  yearMax: number;
  lifeSatisfactionMin: number;
  lifeSatisfactionMax: number;
  gdpMin: number;
  gdpMax: number;
  internetUsageMin: number;
  internetUsageMax: number;
}

const getDataStats = (myData: DataPointVisualization[]) => {
  const yearMax = d3.greatest(myData, (d) => d.year);
  const yearMin = d3.least(myData, (d) => d.year);
  const lifeSatisfactionMin = d3.least(myData, (d) => d.lifeSatisfaction);
  const lifeSatisfactionMax = d3.greatest(myData, (d) => d.lifeSatisfaction);
  const gdpMax = d3.greatest(myData, (d) => d.gdp);
  const gdpMin = d3.least(myData, (d) => d.gdp);
  const internetUsageMax = d3.greatest(myData, (d) => d.internetUsage);
  const internetUsageMin = d3.least(myData, (d) => d.internetUsage);

  if (yearMin == undefined || yearMax == undefined || lifeSatisfactionMin == undefined || lifeSatisfactionMax == undefined || gdpMin == undefined || gdpMax == undefined || internetUsageMin == undefined || internetUsageMax == undefined) {
    alert('Data not found');
    return;
  }


  let dataStats: DataStats =  {
    yearMin: yearMin.year,
    yearMax: yearMax.year,
    lifeSatisfactionMin: lifeSatisfactionMin.lifeSatisfaction,
    lifeSatisfactionMax: lifeSatisfactionMax.lifeSatisfaction,
    gdpMin: gdpMin.gdp,
    gdpMax: gdpMax.gdp,
    internetUsageMin: internetUsageMin.internetUsage,
    internetUsageMax: internetUsageMax.internetUsage,
  };

  return dataStats;
}


const updateChartData = async (data: DataPointVisualization[], dataStats: DataStats) => {

  console.log(data);
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
  const yScaleGDP = d3
    .scaleLinear()
    .domain([0, dataStats.gdpMax + 100])
    .range([height - marginBottom, marginTop])
    .nice();

    const yScaleLifeSat = d3
    .scaleLinear()
    .domain([0, dataStats.lifeSatisfactionMax + 2])
    .range([height - marginBottom, marginTop])
    .nice();
    
    const yScaleInternet = d3
    .scaleLinear()
    .domain([0, dataStats.internetUsageMax + 5])
    .range([height - marginBottom, marginTop])
    .nice();


    const yAxisGDP = d3.axisLeft(yScaleGDP);
    const yAxisLifeSat = d3.axisLeft(yScaleLifeSat);
    const yAxisInternet = d3.axisLeft(yScaleInternet);


  const lineGDP = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => yScaleGDP(d.gdp));

  const lineLifeSat = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => yScaleLifeSat(d.lifeSatisfaction));

  const lineInternet = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => yScaleInternet(d.internetUsage));

  

  // Create the SVG container.
  const svg = d3.select(chart.value)
    .append("svg")
    .attr("width", width+300)
    .attr("height", height+200)
    .attr("viewBox", [0, 0, width-150, height+100])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Add the x-axis.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickFormat((d) => String(d)));

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft}, 0)`)
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
        .text(selectedCountry.value)
    );

    svg
    .append("g")
    .attr("transform", `translate(0, 0)`)
    .attr("stroke", "green")
    .call(yAxisInternet);

    svg
    .append("g")
    .attr("transform", `translate(-60, 0)`)
    .attr("stroke", "steelblue")
    .call(yAxisGDP)

    svg
    .append("g")
    .attr("transform", `translate(-30, 0)`)
    .attr("stroke", "orange")
    .call(yAxisLifeSat)
    
    svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", lineGDP(data));

    svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 1.5)
    .attr("d", lineLifeSat(data));

    svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 1.5)
    .attr("d", lineInternet(data));
};

onMounted(async () => {
  await composeData();
  fillSelects();
  //updateChartData(data);
});

const composeData = async () => {
  const dataInternetUsage = await d3.csv("/data/UNdata_Export_20240623_internet-usage.csv");
  const dataLifeSatisfaction = await d3.csv("/data/happiness-cantril-ladder.csv");
  const dataGDP = await d3.csv("/data/UNData_Export_20240723_gdp.csv"); 

  // create data years array from 1990 to 2022
  let emptyYears: YearValue[] = [];

  d3.range(1990, 2023).forEach((d) => {
    emptyYears.push({year: d});
  });
    
  let countriesNames: string[] = dataInternetUsage.map((d) => d["Country or Area"]);
  //remove duplicates
  countriesNames = [...new Set(countriesNames)];

  // fill data with countries
  countriesNames.forEach((d) => {
    data.push(new CountryData(d, structuredClone(emptyYears)));
  });

  
  // fill data with values
  data.forEach((d) => {
  dataInternetUsage.forEach((d2) => {
    if (d.name === d2["Country or Area"]) {
      let yearNumber = Number(d2.Year);
      d.years.forEach((d3) => {
        if (d3.year === yearNumber) {
          d3.internetUsage = +d2.Value;
        }
      });
    }
    });
    
    dataLifeSatisfaction.forEach((d2) => {
      if (d.name === d2["Country or Area"]) {
        let yearNumber = Number(d2.Year);
        d.years.forEach((d3) => {
          if (d3.year === yearNumber) {
            d3.lifeSatisfaction = +d2.Value;
          }
        });
      }
    });

    dataGDP.forEach((d2) => {
      if (d.name === d2["Country or Area"]) {
        let yearNumber = Number(d2.Year);
        d.years.forEach((d3) => {
          if (d3.year === yearNumber) {
            d3.gdp = +d2.Value;
          }
        });
      }
    });
  });

  console.log(data)
};

const fillSelects = () => {  

  data.map((d) => countries.value.push(d.name));

  const continentsNames: string[] = [
    "Africa", "Europe", "North America", "Central America", "Caribbean", "South America", "Oceania", "Asia"
  ];  
  continentsNames.map((d) => continents.value.push(d));
};

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
