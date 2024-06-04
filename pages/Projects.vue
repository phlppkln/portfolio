<template>
  <div class="container">
    <div class="row projects-playground-intro">
      Here you'll find a selection of projects that I've worked on over the
      years.
</div>
    <div class="projects-grid">
      <TheBaseCard
        linkTo="/projects/reimaginingDesign"
        imageSrc=""
        imageAlt="Reimagining Design"
        cardTitle="Reimagining Design"
        cardDescription="Master thesis exploring the potential of the infinite canvas for the design of interactive articles."
      />
      <TheBaseCard
        linkTo="/projects/OSA"
        imageSrc="/img/osa/osa_logo.png"
        imageAlt="OSA Logo"
        cardTitle="Online Self Assessment (OSA)"
        cardDescription="Web platform assisting in the selection of a study program. The goal is to promote self-reflection by exploring interests and abilities through interactive tasks and information of various study-relevant topics."
      />
      <TheBaseCard
        linkTo="/projects/SeeMore"
        imageSrc="/img/seeMore/seemore_logo_transp.png"
        imageAlt="SeeMore"
        cardTitle="SeeMore"
        cardDescription="This is a description for SeeMore"
        v-if="false"
      />
      <TheBaseCard
        linkTo="/projects/TypingStars"
        imageSrc="/img/typing-stars/typing_stars_logo.png"
        imageAlt="Typing Stars Logo"
        cardTitle="Typing Stars"
        cardDescription="Mobile game aimed at improving writing skills and to observe typing behavior changes when
            introducing fault tolerance."
        v-if="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
