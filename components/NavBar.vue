<template>
  <div class="nav-bar-container">
    <div class="navbar navbar-expand-lg">
      <div class="navbar-toggler" type="button" @click="toggleNavBar">
        <span class="navbar-toggler-icon"></span>
      </div>
      <div class="navbar-nav" :class="{ 'navbar-nav-collapsed': isCollapsed}">
        <NuxtLink to="/">
          <div class="nav-link">Home</div>
        </NuxtLink>
        <NuxtLink to="/projects">
          <div class="nav-link">Projects</div>
        </NuxtLink>
        <NuxtLink to="/playground">
          <div class="nav-link">Playground</div>
        </NuxtLink>
        <NuxtLink to="/about">
          <div class="nav-link">About</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isCollapsed = ref(true);

const toggleNavBar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped lang="scss">
.nav-bar-container {
  display: flex;
  align-items: right;
  justify-content: right;
  border-bottom: 4px solid $primary;
}

.navbar {
  @media (max-width: 768px) {
    .navbar-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      .nav-item {
        margin-bottom: 10px;
      }
      .navbar-nav-collapsed{
        display: none;
        background-color: red;
      }
    }
  }
}

.nav-link {
  padding: 1em;
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
}

a {
  text-decoration: none;
  border-top: 0.2em solid $background;

  &:hover {
    border-top: 0.2em solid $secondary;
  }

  &.router-link-active {
    border-top: 0.2em solid $secondary;
  }
}
</style>
