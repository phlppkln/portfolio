<template>
  <div class="container">
    <NuxtLink class="link" :to="linkTo">
      <div class="card">
        <div class="image-container">
          <div class="image">
            <NuxtImg class="image" :src="imageSrc" :alt="imageAlt" height="200" />
        </div>
        </div>
        <div class="card-body">
          <div class="card-title text">{{ cardTitle }}</div>
          <div class="card-text text">{{ cardDescription }}</div>
          <div class="tags-container" v-if="false">
            <div class="tag">web</div>
            <div class="tag">design</div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, toRefs } from "vue";

const props = defineProps({
  linkTo: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardDescription: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },
});
const { imageSrc, imageAlt, cardTitle, cardDescription, tags } = toRefs(props);
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 25rem;
  cursor: pointer;
  outline: 2px solid $primary;
  border: 1px solid $primary;
  text-decoration: none;
  border-radius: 0rem;

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 0.5px solid $primary;

    .image{
      max-width: 100%;
      height: auto;
    }
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bolder;
  }
}

.card:hover {
  animation: colorize 0.5s forwards;
  color: $background;

  @keyframes colorize {
    0% {
    }
    100% {
      
  background-color: $secondary;
  outline: 5px solid $primary;
    }
  }
  
  .card-title{
    text-decoration: underline;
  }
}
</style>
