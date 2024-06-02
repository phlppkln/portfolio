<template>
  <div>
    <h1><i class="bi bi-projector"></i> Projects</h1>
    <p>
      Here you'll find a selection of projects accumulated over the years that I've worked on.
    </p>

    <div class="projects-grid">
      <NuxtLink to="/projects/SeeMore">
      <TheBaseCard 
        :imageSrc="`https://picsum.photos/200/300?random=1`"
        imageAlt="SeeMore"
        cardTitle="SeeMore"
        cardDescription="This is a description for SeeMore"
      />
      </NuxtLink>
      <NuxtLink to="/projects/DigDeeper">
      <TheBaseCard
        :imageSrc="`https://picsum.photos/200/300?random=${i}`"
        imageAlt="DigDeeper Logo"
        cardTitle="DigDeeper"
        cardDescription="DigDeeper"
      />
      </NuxtLink>
      <NuxtLink to="/projects/OSA">
      <TheBaseCard
        :imageSrc="`https://picsum.photos/200/300?random=${i}`"
        imageAlt="OSA Logo"
        cardTitle="OSA"
        cardDescription="OSA"
      />
      </NuxtLink>
      <NuxtLink to="/projects/TypingStars">
      <TheBaseCard
        :imageSrc="`https://picsum.photos/200/300?random=${i}`"
        imageAlt="Typing Stars Logo"
        cardTitle="Typing Stars"
        cardDescription="Android app aimed at improving users' writing skills in a mobile
            gaming environment and to observe changes in typing behavior when
            introducing fault tolerance in mobile typing games."
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>