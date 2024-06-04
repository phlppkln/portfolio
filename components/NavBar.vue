<template>
  <div class="nav-bar-container">
    <div class="navbar navbar-expand-lg">
      <div class="navbar-toggler" type="button" @click="toggleNavBar">
        <div :class="{ 'toggler-icon': true, 'toggler-icon-collapsed': isCollapsed }"></div>
      </div>
      <div class="navbar-nav" :class="{ 'nav-collapsed': isCollapsed }">
        <NuxtLink to="/">
          <div class="nav-link"><i class="bi bi-house"></i> Home</div>
        </NuxtLink>
        <NuxtLink to="/projects">
          <div class="nav-link"><i class="bi bi-projector"></i> Projects</div>
        </NuxtLink>
        <NuxtLink to="/playground">
          <div class="nav-link"><i class="bi bi-joystick"></i> Playground</div>
        </NuxtLink>
        <NuxtLink to="/about">
          <div class="nav-link"><i class="bi bi-file-person"></i> About</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
const isCollapsed = ref(true);

const toggleNavBar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped lang="scss">
.nav-bar-container { 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid $primary;
}

.nav-bar-container {
  @media (max-width: 768px) {
    .navbar {
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
  }
}

.navbar {
  @media (max-width: 768px) {
    .navbar-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .nav-link {
        margin-bottom: 10px;
      }
      &.nav-collapsed {
        display: none;
      }
    }
  }
}

.toggler-icon {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &::before,
  &::after,
  & > div {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: black;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
  }

  & > div {
    top: 8px;
  }

  &::after {
    top: 16px;
  }
}

.toggler-icon-collapsed {
  transform: rotate(45deg);

  &::before {
    top: 8px;
    transform: rotate(90deg);
  }

  & > div {
    background-color: transparent;
  }

  &::after {
    top: 8px;
    transform: rotate(90deg);
  }
}

.nav-link {
  padding: 1em;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0rem 1rem 0rem 1rem;

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