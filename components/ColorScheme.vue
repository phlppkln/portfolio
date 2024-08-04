<template>
  <div
    class="container"
    ref="colorSchemeContainer""
  >
    <div class="header">
      {{ colorSchemeName }}
    </div>
    <div class="color-container primary-container"></div>
    <div class="color-container secondary-container"></div>
    <div class="color-container background-container"></div>
    <div class="color-container text-container"></div>
  </div>
</template>

<script setup lang="ts">
const colorSchemeContainer = ref<HTMLDivElement | null>(null);

const props = defineProps({
  colorSchemeName: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["set-color-scheme"]);

onMounted(() => {
  addMyTheme();
});

const addMyTheme = () => {
  if (props.colorSchemeName == "patagonian-knot") {
    colorSchemeContainer.value?.classList.add("theme-patag-knot");
  } else if (props.colorSchemeName == "tdf") {
    colorSchemeContainer.value?.classList.add("theme-tdf");
  } else if (props.colorSchemeName == "dark") {
    colorSchemeContainer.value?.classList.add("theme-dark");
  } else if (props.colorSchemeName == "green-sea") {
    colorSchemeContainer.value?.classList.add("theme-green-sea");
  } else if (props.colorSchemeName == "neon-night") {
    colorSchemeContainer.value?.classList.add("theme-neon-night");
  }
};

watch(() => props.selected, (selection, prevSelection) => {
    if(props.selected){
        colorSchemeContainer.value?.classList.add("selected");
    } else {
        colorSchemeContainer.value?.classList.remove("selected");
    }
});
</script>

<style scoped lang="scss">
.container {
  border: 4px solid black;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
}

.selected {
  border: 4px solid var(--secondary-color);
}
</style>
