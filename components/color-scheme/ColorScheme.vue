<template>
  <div
    class="container"
    ref="colorSchemeContainer"
  >
    <div class="header">
      {{ getHeaderName(colorSchemeName) }}
    </div>
    <div class="color-box primary-box"></div>
    <div class="color-box secondary-box"></div>
    <div class="color-box background-box"></div>
    <div class="color-box text-box"></div>
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

const getHeaderName = (name: string) => {
  if (name == "patagonian-knot") {
    return "Patagonian Knot";
  } else if (name == "tdf") {
    return "Tierra del Fuego";
  } else if (name == "dark") {
    return "Dark";
  } else if (name == "green-sea") {
    return "Green Sea";
  }
  else if (name == "neon-night") {
    return "Neon Night";
  }

  return "Default";
};
</script>

<style scoped lang="scss">
.container {
  border: 4px solid black;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  background-color: lightgray;

  .header {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 150ms ease-in-out;
  }
}

.selected {
  border: 4px solid var(--secondary-color);
}


.color-box {
    width: 100%;
  height: 5rem;
  border-radius: 1rem;
  margin: 0.5rem;
  border: 0.2rem solid black;
}

.primary-box {
  background-color: var(--primary-color);
}

.secondary-box {
  background-color: var(--secondary-color);
}

.background-box {
  background-color: var(--background-color);
}

.text-box {
  background-color: var(--text-color);
}
</style>
