<template>
  <div id="home-background">

</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
  router.push('/about');

  // remove if color scheme will be finished
  const el = document.body;
  let selectedTheme = "theme-patag-knot";
  el.classList.add(selectedTheme);
})
</script>


<style scoped>

</style>