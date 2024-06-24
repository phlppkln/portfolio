
<template>
  <div class="container row">
    <div class="row projects-playground-intro">
      Playing around with code can be fun. Here you can find some experimental ideas and projects. No guarantees for how they look or what they do.
      Things might be broken.
  </div>
    <div class="projects-grid">
    
      <TheBaseCard
        linkTo="/playground/three"
        imageAlt="Three.js Experiments"
        cardTitle="Three.js Experiments"
        cardDescription="Exploring the possibilities of Three.js."
        :cardHeight=0
        v-if="false"
      />

      <TheBaseCard
        linkTo="/playground/internetUsage"
        imageAlt="Percentage of individuals using the internet"
        cardTitle="Percentage of individuals using the internet"
        cardDescription="Percentage of individuals using the internet from UN data."
        :cardHeight=0
        :tags="['d3', 'nuxt', 'data visualization', 'un data', 'line chart']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
