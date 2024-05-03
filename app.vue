<template>
  <div class="container">
    <div class="row" id="nav-bar">
      <NavBar />
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import NavBar from './components/navBar.vue';

export default {
  name: 'App',
};

</script>