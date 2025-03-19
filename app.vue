<template>
  <div class="container">
    <div class="header">
      <NavBar></NavBar>
    </div>
    <div class="content">
      <NuxtPage></NuxtPage>
    </div>
    <div class="footer">
      <Footer id="footer"></Footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
html, body{
  width: 100%;
  height: 100%;
}
.container {
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  gap: 1rem;
  min-height: 100vh;

  div.header {
    grid-area: header;
    text-align: center;
  }

  div.content {
    grid-area: content;
  }

  div.footer {
    grid-area: footer;
    align-items: center;
  }
}
</style>
