<template>
    <div class="container">
    <div id="home-background"></div>

    <div>
        Inspiration from <a href="https://github.com/EmanuelAngelo/menu-icons-interativos/" target="_blank">Lista de Menu interativo</a> by Emanuel Angelo 
    </div>
    <div class="menu-container">
      <div class="menu" :class="{ active: menuActive }">
        <!-- Icon menu container -->
        <ul >
          <!-- Menu toggle button -->
          <div class="menuToggle" @click="menuToggleClick">
            <i class="bi bi-plus-circle"></i>
          </div>
          <!-- Menu items with icons and colors -->
          <li style="--i: 0" >
            <NuxtLink
              to="/projects"
              ><i class="bi bi-projector" @mouseover="setCurrentHoverItem('Projects')"></i
            ></NuxtLink>
          </li>
          <li style="--i: 1" @mouseover="setCurrentHoverItem('Playground')">
            <NuxtLink to="/playground"><i class="bi bi-joystick"></i></NuxtLink>
          </li>
          <li style="--i: 2">
            <NuxtLink to="/blog" @mouseover="setCurrentHoverItem('Blog')"
              ><i class="bi bi-pencil"></i
            ></NuxtLink>
          </li>
          <li style="--i: 3">
            <NuxtLink to="/about" @mouseover="setCurrentHoverItem('About')"
              ><i class="bi bi-file-person"></i
            ></NuxtLink>
          </li>
        </ul>
      </div>      <div class="menu-label" :class="{ 'hidden': !menuActive }">
          <div class="menu-item">{{ currentHoverItem }}</div>
        </div></div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  
  onMounted(() => {});
  
  const menuActive = ref<boolean>(false);
  const currentHoverItem = ref<string>("");
  
  const setCurrentHoverItem = (item: string) => {
    currentHoverItem.value = item;
  };
  
  const menuToggleClick = () => {
    // add active class
    menuActive.value = !menuActive.value;
  };
  </script>
  
  <style scoped lang="scss">
  .hidden {
    width: 4rem;
  }
  
  #home-background {
    width: 100vw;
    height: 100vh;
    background-image: url("img/background.png");
    background-size: cover;
    position:absolute;
    top: 0;
    left: 0;
  }
  
  .menu-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    flex-direction: column;
  }
  .menu-label {
      font-size: 2rem;
    }
  
  .bi {
    color: black;
    z-index: 100;
  }
  .menu {
    position: relative;
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    opacity: 0.7;
    border-radius: 10rem;
    border: 1rem solid var(--primary-color);
  }
  .menu li {
    position: absolute;
    list-style: none;
    transform: rotate(0deg);
    transform-origin: 10rem;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
  }
  .menu.active li {
    transform: rotate(calc(360deg / 4 * var(--i)));
  }
  
  .menu a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    text-decoration: none;
    font-size: 3rem;
    border-radius: 100%;
    transform: rotate(calc(360deg / -4 * var(--i)));
    transition: 1s;
    color: transparent;
    border: 0.2rem solid var(--secondary-color);
    transition-delay: 0.5s;
    filter: drop-shadow(0 0 0.2rem var(--secondary-color));
  }
  
  .menuToggle {
    position: relative;
    width: 8rem;
    height: 8rem;
    color: black;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    border-radius: 50%;
    cursor: pointer;
    font-size: 32px;
    transition: 1.5s;
  }
  
  .menu.active .menuToggle {
    transform: rotate(315deg);
  }
  
  a {
    text-decoration: none;
    background-color: none !important;
  
    &:hover {
      background-color: none !important;
      font-size: 4rem;
    }
  }
  </style>
  