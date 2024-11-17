<template>
  <div class="container">
    <NavBar id="navbar"></NavBar>
    <div id="content">
      <NuxtPage></NuxtPage>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
.container {
  @include fadein-default;
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: top;
  flex: 1 0 auto;
}
</style>
