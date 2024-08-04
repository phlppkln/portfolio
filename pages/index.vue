<template>
  <div class="container-fluid">
    <div id="landing-page-background"></div>
    <div class="p5-background">
      <P5LandingPage
        :width="width"
        :height="height"
        :loadScheme="colorScheme"
      ></P5LandingPage>
    </div>

    <div class="app-theme-selector-container">
      <div class="color-scheme-selector-container">
        <h2 class="app-theme-selector-header">Welcome!</h2>
        <p class="app-theme-selector-text">
          I am a designer and developer passionate about creating user-centered
          digital experiences. In my work I use technology as a tool to generate
          insights and explore ideas. Through a human-centered design approach,
          I focus on understanding people's needs and implementing solutions.
        </p>
        <p class="app-theme-selector-text">to enter, select an app-theme:</p>
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

const colorScheme = ref("none");
const emit = defineEmits(["page-entered"]);

import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

onMounted(() => {
  emit("page-entered", false);
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

  emit("page-entered", true);
  router.push("/about");
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
}
</style>
