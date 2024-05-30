<template>
  <div class="card">
    <div class="image-container">
      <NuxtImg :src="imageSrc" :alt="imageAlt" height="200" />
    </div>
    <div class="card-title text">{{ cardTitle }}</div>
    <div class="card-text text">{{ cardDescription }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, toRefs } from "vue";

const props = defineProps([
  "imageSrc",
  "imageAlt",
  "cardTitle",
  "cardDescription",
  "hrefLink",
]);
const { imageSrc, imageAlt, cardTitle, cardDescription, hrefLink } = toRefs(props);
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background-color: $background;
  border-radius: 0.5rem;
  cursor: pointer;

  .card-title {
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .card-text {
    font-size: 1rem;
  }
}

.card:hover {
  background-color: $secondary;
  color: $background;
  font-weight: bolder;
  text-decoration: underline;
  border: 8px solid $primary;

  .image-container {
    img {
      filter: invert(1);
    }
  }
}
</style>
