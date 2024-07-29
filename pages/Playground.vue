<template>
  <div class="container row">
    <div class="row projects-playground-intro">
      Playing around can be fun. Here you can find some experimental
      ideas and projects. No guarantees for how they look or what they do.
      Things might be broken and/or unfinished.
    </div>
    <div class="projects-grid">
      <TheBaseCard
        linkTo="/playground/three"
        imageAlt="Three.js Experiments"
        cardTitle="Three.js Experiments"
        cardDescription="Exploring the possibilities of Three.js."
        :cardHeight="0"
        v-if="false"
      />

      <TheBaseCard
        linkTo="/playground/radialMenu"
        imageAlt="Radial Menu"
        cardTitle="Radial Menu"
        cardDescription="Experimenting with radial menus to improve user experience by adding more interactivity."
        :cardHeight="0"
        :tags="['nuxt', 'vue', 'ui design', 'ux design', 'interactivity']"
      />


      <TheBaseCard
        linkTo="/playground/internetUsage"
        imageSrc="/img/playground/wifi.svg"
        imageAlt="The Power of the Internet"
        cardTitle="The Power of the Internet"
        cardDescription="How did the percentage of people using the internet change from 1990 to 2022 in different countries/continents? 
        Is there a correlation between internet usage and GDP of countries? 
        Is there a correlation between internet usage and life satisfaction?"
        :cardHeight="0"
        :tags="['d3', 'nuxt', 'data visualization', 'information visualization', 'data exploration', 'line chart']"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.container {
  @include fadein1s-cubic-bezier;
}
</style>
