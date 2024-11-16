<template>
  <div class="">
    <div class="navbar-container" v-if="!isLandingPage">
      <NavBar id="navbar"></NavBar>
    </div>
    <div class="nuxt-page-container">
      <NuxtPage @isLandingPage="isLandingPage = !isLandingPage"></NuxtPage>
    </div>
    <div class="footer-container" v-if="!isLandingPage">
      <Footer id="footer"></Footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLandingPage = ref(false);
const pageLoaded = ref(false);

onMounted(() => {
  // get theme from local storage
  const storedTheme = localStorage.getItem("page-theme");
  const el = document.body;
  if (storedTheme) {
    el.classList.add(storedTheme);
  } else {
    el.classList.add("theme-patag-knot");
  }
  pageLoaded.value = true;
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  flex: 1 0 auto;

  @include fadein1s-cubic-bezier;
}
</style>
