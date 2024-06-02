<template>
  <div class="card">
    <div class="image-container card-img-top">
      <NuxtImg :src="imageSrc" :alt="imageAlt" height="200" />
    </div>
    <div class="card-body">
    <div class="card-title text">{{ cardTitle }}</div>
    <div class="card-text text">{{ cardDescription }}</div>
    <div class="tags-container">
      <div class="tag">web</div>
      <div class="tag">design</div>

    </div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, toRefs } from "vue";

const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  cardTitle: String,
  cardDescription: String,
  tags: Array,
});
const { imageSrc, imageAlt, cardTitle, cardDescription, tags } = toRefs(props);

onMounted(() => {
  console.log("tags");
  unpackTags();
});

const unpackTags = () => {
  console.log('tags: ' + tags?.value);
}
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
  padding: 2rem;

  .card-title {
    font-size: 1.5rem;
    font-weight: bolder;
  }
}

.card:hover {
  background-color: $secondary;
  color: $background;
  border: 8px solid $primary;

  .image-container {
    img {
      filter: invert(1);
    }
  }
}
</style>
