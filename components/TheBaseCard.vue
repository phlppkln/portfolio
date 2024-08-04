<template>
  <div class="container">
    <NuxtLink class="link" :to="linkTo">
      <div class="card" ref="card">
        <div class="image-container">
          <div class="image">
            <div v-if="imageSrc">
            <NuxtImg class="image" :src="imageSrc" :alt="imageAlt" height="200"/></div>
          <div v-else>
            <div class="image-placeholder" height="200"></div>
          </div>
        </div>
        </div>
        <div class="card-body">
          <div class="card-title text">{{ cardTitle }}</div>
          <div class="card-text text">{{ cardDescription }}</div>
          <div class="card-status" v-if="projectStatus">Project Status: {{ projectStatus }}</div>
          <div class="card-time" v-if="timeRange">{{ timeRange }}</div>
          <div class="tags-container">
            <div class="tag" v-for="tag in tags">
              <UBadge color="red" variant="solid">{{ tag }}</UBadge>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from "vue";

const props = defineProps({
  linkTo: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: false,
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
  projectStatus: {
    type: String,
    required: false,
  },
  timeRange: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
    default: null,
  },
  cardHeight: {
    type: Number || String,
    required: false,
    default: 'auto'
  }
});
const { imageSrc, imageAlt, cardTitle, cardDescription, timeRange, tags, cardHeight } = toRefs(props);

const card: Ref<HTMLElement | null> = ref(null);


const setCardHeight = () => {
  console.log(cardHeight.value);

  if(card.value) {
    if(cardHeight.value == 0){
    card.value.style.height = "auto";
  }
  else{
    card.value.style.height = cardHeight.value+'px';
  }
  }
};

watch(() => cardHeight.value, setCardHeight);

</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 2px solid var(--primary-color);
  border: 1px solid var(--primary-color);
  text-decoration: none;
  border-radius: 0rem;


  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 0.5px solid var(--primary-color);

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
  color: var(--background-color);

  @keyframes colorize {
    0% {
    }
    100% {
      
  background-color: var(--secondary-color);
  outline: 5px solid var(--primary-color);
    }
  }
  
  .card-title{
    text-decoration: underline;
  }
}

.card-status, .card-time{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: grey;
}
.card-status{  
  margin-top: 1rem;
  border-top: 1px solid black;
}

.tags-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem 1rem 1rem;
}
.tag{
  margin: 0.1rem;
}
</style>
