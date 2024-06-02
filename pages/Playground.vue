<template>
  <div>
    <h1><i class="bi bi-joystick"></i> Playground</h1>
    <p>
      Playing around with code can be fun. Here you can find some experimental ideas and projects. No guarantees for how they look or what they do.
      Things might be broken.
    </p>

    <div class="projects-grid">
      <TheBaseCard
        v-for="i in 20"
        :key="i"
        :imageSrc="`https://picsum.photos/200/300?random=${i}`"
        :imageAlt="`Project ${i}`"
        :cardTitle="`Project ${i}`"
        :cardDescription="`Project Description ${i}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
