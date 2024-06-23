
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
      />

      <TheBaseCard
        linkTo="/playground/d3"
        imageAlt="D3.js Experiments"
        cardTitle="D3.js Experiments"
        cardDescription="Exploring the possibilities of D3.js."
        :cardHeight=0
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
