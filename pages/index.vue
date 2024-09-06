<template>
  <div class="container-fluid">
    <div id="landing-page-background"></div>
    <div class="p5-background" v-if="false">
      <P5LandingPage
        :width="width"
        :height="height"
        :theme="colorScheme"
      ></P5LandingPage>
    </div>

    <div class="app-theme-selector-container" v-if="true">
      <div class="color-scheme-selector-container">
        <h2 class="app-theme-selector-header">Welcome!</h2>
        <p class="app-theme-selector-text">
          I'm a designer and developer specializing in human-centered
          digital experiences. I'm interested in interactive, data-driven digital systems that transform complex concepts into intuitive, impactful web interfaces.
          My current focus is on enhancing user engagement and insight generation through creative collaboration, self-reflection, and critical thinking. 
        </p>
        <p class="app-theme-selector-text">To get started, select a color theme for this page:</p>
        <ColorSchemeSelector
          @set-color-scheme="setColorScheme"
          @enter-page="enterPage"
        ></ColorSchemeSelector>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const router = useRouter();

const colorScheme = ref("patagonian-knot");
const emit = defineEmits(["is-landing-page"]);

import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

onMounted(() => {
  // reset theme
  const el = document.body;
  const classList = el.classList;
  classList.forEach((c) => {
    if (c.includes("theme")) {
      el.classList.remove(c);
    }
  })
  emit("is-landing-page", true);
  console.log('mounted');
});

const setColorScheme = (value: string) => {
  colorScheme.value = value;
};

const getAppTheme = () => {
  if (colorScheme.value == "patagonian-knot") {
    return "theme-patag-knot";
  } else if (colorScheme.value == "tdf") {
    return "theme-tdf";
  } else if (colorScheme.value == "dark") {
    return "theme-dark";
  } else if (colorScheme.value == "green-sea") {
    return "theme-green-sea";
  } else if (colorScheme.value == "neon-night") {
    return "theme-neon-night";
  }
  return "theme-default";
};

const enterPage = () => {
  // remove old theme from body
  const el = document.body;
  const classList = el.classList;
  classList.forEach((c) => {
    if (c.includes("theme")) {
      el.classList.remove(c);
    }
  });

  // add new theme to body
  let selectedTheme = getAppTheme();
  el.classList.add(selectedTheme);

  // set new theme in local storage
  localStorage.setItem("page-theme", selectedTheme);

  emit("is-landing-page", false);
  router.push("/projects");
};
</script>

<style scoped>
.p5-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
}

.color-scheme-selector-container {
  display: grid;
  justify-items: center;
  align-items: center;
}

.app-theme-selector-header {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.app-theme-selector-text {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border: 0.5rem solid black;
  background-color: lightgoldenrodyellow;
}
</style>
