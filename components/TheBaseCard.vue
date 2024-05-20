<template>
  <div class="card">
    <div class="image-container">
      <img src=props.imageSrc  alt=" {{ props.imageAlt }}" />
    </div>
    <div class="cart-title">{{ props.cardTitle }}</div>
    <div class="cart-text">{{ props.cardDescription }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps(["imageSrc", "imageAlt", "cardTitle", "cardDescription"]);
</script>

<style scoped lang="scss">

</style>
