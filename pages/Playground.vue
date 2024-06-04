<template>
  <div class="container row">
    <div class="row projects-playground-intro">
      Playing around with code can be fun. Here you can find some experimental ideas and projects. No guarantees for how they look or what they do.
      Things might be broken.
  </div>
    <div class="projects-grid">
    
      <TheBaseCard
        linkTo="/playground/three"
        imageSrc=""
        imageAlt="Three.js Experiments"
        cardTitle="Three.js Experiments"
        cardDescription="Exploring the possibilities of Three.js."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheBaseCard from "~/components/TheBaseCard.vue";

</script>

<style scoped lang="scss">

</style>
