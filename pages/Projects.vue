<template>
  <div class="container">
    <div class="row projects-playground-intro">
      Here you'll find a selection of projects that I've worked on over the
      years.
    </div>
    <div class="projects-grid row">
      <div class="col-xl-3 col-md-5 col-sm-12" ref="cardReimaginingDesignRef">
        <TheBaseCard
          linkTo="/projects/reimagining-design"
          imageSrc="/img/projects/reimagining-design/infinite_canvas_3d-space.png"
          imageAlt="Reimagining Design"
          cardTitle="Reimagining Design"
          cardDescription="Master thesis exploring the potential of the infinite canvas for the design of interactive articles."
          projectStatus="ongoing"
          timeRange="2021-current"
          :tags="[
            'web development',
            'react',
            'research',
            'd3.js',
            'information visualization',
            'miro',
            'collaboration',
            'design thinking',
          ]"
          :cardHeight="cardMaxHeight"
        />
      </div>
      <div class="col-xl-3 col-md-5 col-sm-12" ref="cardOSARef">
        <TheBaseCard
          linkTo="/projects/osa"
          imageSrc="/img/projects/osa/osa_logo.png"
          imageAlt="OSA Logo"
          cardTitle="Online Self Assessment (OSA)"
          cardDescription="Web platform assisting in the selection of a study program. The goal is to promote self-reflection by exploring interests and abilities through interactive tasks and information of various study-relevant topics."
          projectStatus="ongoing"
          timeRange="2020-2024"
          :tags="[
            'web development',
            'vue.js',
            'research',
            'ux',
            'ui',
            'information visualization',
            'interaction design',
            'e-learning',
          ]"
          :cardHeight="cardMaxHeight"
        />
      </div>
      <div class="col-xl-3 col-md-5 col-sm-12" ref="cardSeeMoreRef">
        <TheBaseCard
          linkTo="/projects/see-more"
          imageSrc="/img/projects/seeMore/seemore_logo_transp.png"
          imageAlt="SeeMore"
          cardTitle="SeeMore"
          cardDescription="Project aiming to motivate urban citizens to spend more time in nature to experience their surrounding more consciously."
          projectStatus="finished"
          timeRange="2020 - 2021"
          :tags="[
            'design thinking',
            'interaction design',
            'user research',
            'ux',
            'ui',
            'user tests',
          ]"
          :cardHeight="cardMaxHeight"
        />
      </div>
      <TheBaseCard
        linkTo="/projects/typing-stars"
        imageSrc="/img/projects/typing-stars/typing_stars_logo.png"
        imageAlt="Typing Stars Logo"
        cardTitle="Typing Stars"
        cardDescription="Mobile game aimed at improving writing skills and to observe typing behavior changes when
            introducing fault tolerance."
        v-if="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const cardOSARef = ref(null);
const cardSeeMoreRef = ref(null);
const cardReimaginingDesignRef = ref(null);

const cardMaxHeight = ref(0);

onMounted(() => {
  //getCardMaxHeight();
});

const getCardMaxHeight = () => {
  const cardOSAElement: HTMLElement | null =
    cardOSARef.value as HTMLElement | null;
  const cardSeeMoreElement: HTMLElement | null =
    cardSeeMoreRef.value as HTMLElement | null;
  const cardReimaginingDesignElement: HTMLElement | null =
    cardReimaginingDesignRef.value as HTMLElement | null;

  // find the card with the largest height
  const cardElements = [
    cardOSAElement,
    cardSeeMoreElement,
    cardReimaginingDesignElement,
  ];
  let maxHeight = 0;
  for (const cardElement of cardElements) {
    if (cardElement) {
      const { height } = cardElement.getBoundingClientRect();
      if (height > maxHeight) {
        maxHeight = height;
      }
    }
  }

  console.log(`The largest BaseCard element is ${maxHeight}px tall.`);

  cardMaxHeight.value = maxHeight;
};

</script>

<style scoped lang="scss">
.container {
  @include fadein-default;
}
</style>
