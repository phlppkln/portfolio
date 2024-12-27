<template>
  <div class="container">
    <div class="content">
      <h1>Color Combinator</h1>

      <p>
        Color Combinator to help with color combinations for Tailwind CSS. It
        also feature a selector to add custom colors.
      </p>
      <h2>Log</h2>
      <div
        class="log-container p-2 mb-12 ml-12 mr-12 border-black bg-red-100 rounded-lg border-4"
      >
        <div v-for="log in loggerText" :key="log">{{ log }}</div>
      </div>
      <div class="color-combinator-container mb-8">
        <p class="mb-0">Theme</p>
        <div class="dropdown p-2">
          <USelect
            v-model="selectedTheme"
            :options="themes"
            color="gray"
            variant="outline"
          />
        </div>
      </div>
      <div class="bg-white border-black rounded-lg border-4 p-4">
      <div class="dropdown-container">
        <div class="dropdown p-2">
          <p class="mb-0">Background</p>
          <USelect
            v-model="selectedBackground"
            :options="tailwindColors"
            color="gray"
            variant="outline"
          />
        </div>
        <div class="dropdown p-2">
          <p class="mb-0">Box</p>
          <USelect
            v-model="selectedBoxColor"
            :options="tailwindColors"
            color="gray"
            variant="outline"
          />
        </div>
        <div class="dropdown p-2">
          <p class="mb-0">Font</p>
          <USelect
            v-model="selectedFontColor"
            :options="tailwindColors"
            color="gray"
            variant="outline"
          />
        </div>
        <div class="dropdow p-2 min-w-96">
          <p class="mb-0">My Text</p>
          <UInput
            v-model="myText"
            placeholder="Enter text"
            color="gray"
            variant="outline"
          />
        </div>
      </div>
      <div class="flex items-center justify-center py-8">
        <div class="showcase-canvas border-black rounded-lg border-2 min-h-80">
          <div
            id="canvas-background"
            class="background-container min-h-80"
          ></div>
          <div id="canvas-box" class="box-container min-h">
            <div id="canvas-font-box" class="font-container-box">
              {{ myText }}
            </div>
          </div>
          <div id="canvas-font-bg" class="font-container-bg">{{ myText }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import colors from "tailwindcss/colors";

const tailwindColors = [...Object.keys(colors)];

/* tailwindColors.push("patag-knot-primary");
tailwindColors.push("tierra-del-fuego-primary");
tailwindColors.push("dark-primary");
tailwindColors.push("green-sea-primary");
tailwindColors.push("neon-night-primary");
tailwindColors.push("patag-knot-secondary");
tailwindColors.push("tierra-del-fuego-secondary");
tailwindColors.push("dark-secondary");
tailwindColors.push("green-sea-secondary");
tailwindColors.push("neon-night-secondary");
tailwindColors.push("patag-knot-background");
tailwindColors.push("tierra-del-fuego-background");
tailwindColors.push("dark-background");
tailwindColors.push("green-sea-background");
tailwindColors.push("neon-night-background");
tailwindColors.push("patag-knot-text");
tailwindColors.push("tierra-del-fuego-text");
tailwindColors.push("dark-text");
tailwindColors.push("green-sea-text");
tailwindColors.push("neon-night-text");
 */

tailwindColors.push("theme-primary");
tailwindColors.push("theme-secondary");
tailwindColors.push("theme-background");
tailwindColors.push("theme-text");

const customColors = {
  "patag-knot": {
    primary: "#08645e",
    primaryDark: "#064541",
    secondary: "#bd4342",
    secondaryDark: "#9A3938",
    background: "#f1f1f1",
    text: "#000000",
  },
  "tierra-del-fuego": {
    primary: "#B58A47",
    primaryDark: "#8D6C37",
    secondary: "#4682B4",
    secondaryDark: "#396387",
    background: "#F5F5F5",
    text: "#2F4F4F",
  },
  dark: {
    primary: "#1d1d1d",
    primaryDark: "#000000",
    secondary: "#E8E8E8",
    secondaryDark: "#E3E3E3",
    background: "#666666",
    text: "#f0f0f0",
  },
  "green-sea": {
    primary: "#5FBA74",
    primaryDark: "#4C965D",
    secondary: "#5FBAB2",
    secondaryDark: "#4A9790",
    background: "#F5F5F5",
    text: "#000000",
  },
  "neon-night": {
    primary: "#FF00FF",
    primaryDark: "#BF00BF",
    secondary: "#00FFFF",
    secondaryDark: "#01C1C1",
    background: "#000000",
    text: "#FFFFFF",
  },
};

const themes = [
  "Patagonian Knot",
  "Tierra del Fuego",
  "Dark",
  "Neon Night",
  "Green Sea",
];

const selectedTheme = ref(themes[0]);
const selectedBackground = ref("");
const selectedBoxColor = ref("");
const selectedFontColor = ref("");
const myText = ref("");

let loggerText = ref([""]);

const addMyTheme = (theme: string) => {
  if (theme == "Patagonian Knot") {
    document.documentElement.style.setProperty(
      "--theme-primary",
      customColors["patag-knot"].primary
    );
    document.documentElement.style.setProperty(
      "--theme-primary-dark",
      customColors["patag-knot"].primaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      customColors["patag-knot"].secondary
    );
    document.documentElement.style.setProperty(
      "--theme-secondary-dark",
      customColors["patag-knot"].secondaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-background",
      customColors["patag-knot"].background
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      customColors["patag-knot"].text
    );
  } else if (theme == "Tierra del Fuego") {
    document.documentElement.style.setProperty(
      "--theme-primary",
      customColors["tierra-del-fuego"].primary
    );
    document.documentElement.style.setProperty(
      "--theme-primary-dark",
      customColors["tierra-del-fuego"].primaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      customColors["tierra-del-fuego"].secondary
    );
    document.documentElement.style.setProperty(
      "--theme-secondary-dark",
      customColors["tierra-del-fuego"].secondaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-background",
      customColors["tierra-del-fuego"].background
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      customColors["tierra-del-fuego"].text
    );
  } else if (theme == "Dark") {
    document.documentElement.style.setProperty(
      "--theme-primary",
      customColors["dark"].primary
    );
    document.documentElement.style.setProperty(
      "--theme-primary-dark",
      customColors["dark"].primaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      customColors["dark"].secondary
    );
    document.documentElement.style.setProperty(
      "--theme-secondary-dark",
      customColors["dark"].secondaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-background",
      customColors["dark"].background
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      customColors["dark"].text
    );
  } else if (theme == "Green Sea") {
    document.documentElement.style.setProperty(
      "--theme-primary",
      customColors["green-sea"].primary
    );
    document.documentElement.style.setProperty(
      "--theme-primary-dark",
      customColors["green-sea"].primaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      customColors["green-sea"].secondary
    );
    document.documentElement.style.setProperty(
      "--theme-secondary-dark",
      customColors["green-sea"].secondaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-background",
      customColors["green-sea"].background
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      customColors["green-sea"].text
    );
  } else if (theme == "Neon Night") {
    document.documentElement.style.setProperty(
      "--theme-primary",
      customColors["neon-night"].primary
    );
    document.documentElement.style.setProperty(
      "--theme-primary-dark",
      customColors["neon-night"].primaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      customColors["neon-night"].secondary
    );
    document.documentElement.style.setProperty(
      "--theme-secondary-dark",
      customColors["neon-night"].secondaryDark
    );
    document.documentElement.style.setProperty(
      "--theme-background",
      customColors["neon-night"].background
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      customColors["neon-night"].text
    );
  }
};

watch(selectedTheme, (newValue, oldValue) => {
  loggerText.value.push(`Theme changed from ${oldValue} to ${newValue}`);
  addMyTheme(newValue);
});

const containsSpecialKey = (str: string) => {
  return str.search("theme") !== -1 || str.search("white") !== -1 || str.search("black") !== -1 || str.search("transparent") !== -1 || str.search("inherit") !== -1 || str.search("current") !== -1;
};

watch(selectedBackground, (newValue, oldValue) => {
  loggerText.value.push(`Background changed from ${oldValue} to ${newValue}`);
  const canvasBackground = document.getElementById("canvas-background");
  if (!canvasBackground) return;
  //compose new bg-* class
  let newValueClass = "bg-";
  if (newValue && containsSpecialKey(newValue)) {
    newValueClass += newValue;
  } else {
    newValueClass += newValue+"-500";
  }
  //remove all bg-* classes
  canvasBackground.classList.forEach((c) => {
    if (c.includes("bg-")) {
      canvasBackground.classList.remove(c);
    }
  });
  canvasBackground.classList.add(newValueClass);
});

watch(selectedBoxColor, (newValue, oldValue) => {
  loggerText.value.push(`Box changed from ${oldValue} to ${newValue}`);
});

watch(selectedFontColor, (newValue, oldValue) => {
  loggerText.value.push(`Font changed from ${oldValue} to ${newValue}`);
});

watch(myText, (newValue, oldValue) => {
  loggerText.value.push(`Text changed from ${oldValue} to ${newValue}`);
});
</script>

<style scoped lang="scss">
.color-combinator-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropdown-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.showcase-canvas {
  width: 80%;
}
</style>
