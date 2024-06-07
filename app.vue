<template>
  <div class="container">
    <div class="row" id="nav-bar">
      <NavBar></NavBar>
    </div>
    <NuxtPage />
    <div class="row" id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
};

</script>