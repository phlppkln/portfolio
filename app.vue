<template>
  <div class="container">
    <div class="row" id="nav-bar">
      <NavBar></NavBar>
    </div>
    <NuxtPage id="content"/>
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

<style lang="scss">
.container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

#content {
    flex: 1;
}

#footer {
    flex-shrink: 0;
}
</style>