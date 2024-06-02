<template>
  <div>
    <h1><i class="bi bi-projector"></i> Projects</h1>
    <p>
      Here you'll find a selection of projects that I've worked on over the
      years.
    </p>

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
      />
      <TheBaseCard
        linkTo="/projects/TypingStars"
        imageSrc="/img/typing-stars/typing_stars_logo.png"
        imageAlt="Typing Stars Logo"
        cardTitle="Typing Stars"
        cardDescription="Mobile game aimed at improving writing skills and to observe typing behavior changes when
            introducing fault tolerance."
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
