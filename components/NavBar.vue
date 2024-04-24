<template>
  <div class="nav-bar-container">
    <div class="navbar">
      <NuxtLink to="/"><div class="nav-link">Home</div></NuxtLink>
      <NuxtLink to="/about"><div class="nav-link">About</div></NuxtLink>
      <NuxtLink to="/projects"><div class="nav-link">Projects</div></NuxtLink>
      <NuxtLink to="/playground"
        ><div class="nav-link">Playground</div></NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.nav-bar-container {
  display: flex;
  align-items: right;
  justify-content: right;
  border-bottom: 4px solid $primary;
}

.navbar {
  display: flex;
  align-items: center;
}

.nav-link {
  padding: 1em;
  color: black;
  font-weight: bold;
  font-size: 20px;

  &.nuxt-link-active {
    color: $primary;
  }

  &.nuxt-link-exact-active {
    color: $primary;
  }

  &:hover {
    color: $primary;
    cursor: pointer;
  }
}
</style>
