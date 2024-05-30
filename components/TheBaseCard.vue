<template>
  <div class="card">
    <div class="image-container">
      <NuxtImg :src="imageSrc"  :alt="imageAlt" />
    </div>
    <div class="cart-title">{{ cardTitle }}</div>
    <div class="cart-text">{{ cardDescription }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, toRefs } from "vue";

const props = defineProps(["imageSrc", "imageAlt", "cardTitle", "cardDescription"]);
const {imageSrc, imageAlt, cardTitle, cardDescription} = toRefs(props);
//const image
</script>

<style scoped lang="scss">

.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background-color: $background;
  border-radius: 0.5rem;
}

</style>
