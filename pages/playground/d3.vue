<template>
    <div class="container">
        <h1>D3.js Experiments</h1>
        <p>This page features some experiments with D3.js</p>

        <div class="scene-container">
            <div ref="chart"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const chart = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $d3 } = useNuxtApp()
  if (chart.value) {
    const data = [10, 15, 20, 25, 30]
    const width = 500
    const height = 200

    const svg = d3.select(chart.value)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const barWidth = width / data.length

    const bar = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)

    bar.append('rect')
      .attr('y', d => height - d * 5)
      .attr('height', d => d * 5)
      .attr('width', barWidth - 1)
      .attr('fill', 'teal')
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'orange')
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', 'teal')
      })

    bar.append('text')
      .attr('x', barWidth / 2)
      .attr('y', d => height - d * 5 - 10)
      .attr('dy', '.75em')
      .attr('text-anchor', 'middle')
      .text(d => d)
  }
})
</script>

<style scoped lang="scss"></style>