<template>
  <div class="">
    <div class="navbar-container" v-if="pageEntered">
    <NavBar id="navbar"></NavBar>
  </div>
    <div class="nuxt-page-container">
      <NuxtPage @pageEntered="enterPage()"></NuxtPage>
    </div>
    <div class="footer-container" v-if="pageEntered">
    <Footer id="footer"></Footer>
  </div>
</div>
</template>

<script lang="ts" setup>

const pageEntered = ref(true);

onMounted(() => {
  pageEntered.value = true;
});


const enterPage = () => {
  pageEntered.value = true;
}



</script>

<style scoped lang="scss">
.container {
  @include fadein1s-cubic-bezier;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  flex: 1 0 auto;
}
</style>
