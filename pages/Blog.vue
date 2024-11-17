<template>
<div class="container">
    <div>
        <h1>Blog</h1>

        <div class="projects-grid">

    <TheBaseCard
      linkTo="/blog/intContentElearning"
      imageAlt="Percentage of individuals using the internet"
      cardTitle="Interactive Content in E-Learning Environments"
      cardDescription="Interactive Content in E-Learning Environments. How do e-learning environments use interactive content and how should we design and integrate them."
      :cardHeight=0
      :tags="['interactivity' , 'e-learning', 'learning', 'design', 'ux', 'ui', 'research']"
    />
    <TheBaseCard
      linkTo="/blog/informationOverload"
      imageAlt="Information Overload: Causes and Countermeasure Approaches"
      cardTitle="Information Overload: Causes and Countermeasure Approaches"
      cardDescription="Information Overload: Causes and Countermeasure Approaches"
      :cardHeight=0
      :tags="['information overload', 'hci', 'interactivity' , 'design', 'information visualization']"
    />
  </div>
    </div>
</div>
</template>


<script setup lang="ts">
</script>


<style scoped lang="scss">
.container {
  @include fadein-default;
}
</style>
