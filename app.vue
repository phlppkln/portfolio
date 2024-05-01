<template>
  <div class="container">
    <div class="row" id="nav-bar">
      <NavBar />
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
};

</script>