<template>
    <div ref="p5Canvas"></div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  import { useNuxtApp } from '#app'
  
  const p5Canvas = ref(null)
  let p5Instance = null
  
  const { $p5 } = useNuxtApp()

  const frameRate = 2;

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  theme: {
    type: String,
    required: true
  }
})

const patagKnotColors = {
  primary: '#08645e',
  secondary: '#bd4342',
  text: '#000000',
  background: '#f1f1f1'
}

const tdfColors = {
  primary: '#B58A47',
  secondary: '#4682B4',
  text: '#2F4F4F',
  background: '#F5F5F5'
}

const darkColors = {
  primary: '#1d1d1d',
  secondary: '#E8E8E8',
  text: '#f0f0f0',
  background: '#666666'
}

const greenSeaColors = {
  primary: '#5FBA74',
  secondary: '#5FBAB2',
  text: '#000000',
  background: '#F5F5F5'
}

const neonNightColors = {
  primary: '#FF00FF',
  secondary: '#00FFFF',
  text: '#FFFFFF',
  background: '#000000',
}

  const sketch = (p) => {
    p.setup = function() {
      // set framerate 
      p.frameRate(frameRate);
      // create canvas
      p.createCanvas(props.width, props.height)


    }
  
    p.draw = function() {

        // TODO: update to new random positions
        let speed = framerate * 0.01;

        // TODO: update color based on theme
        const colorIndex = p.round(p.random(0, 2));
        if(props.theme === 'patagonian-knot') {
          p.background(p.color(patagKnotColors.background));
          if(colorIndex === 0) {
            p.fill(p.color(patagKnotColors.primary));
          } else if(colorIndex === 1) {
            p.fill(p.color(patagKnotColors.secondary));
          } else if(colorIndex === 2) {
            p.fill(p.color(patagKnotColors.background));
          } else if(colorIndex === 3) {
            p.fill(p.color(patagKnotColors.text));
          }
          p.ellipse(getRandomObjectPosition(p, props.width, 500), getRandomObjectPosition(p, props.height, 500), 500, 500);
        } else if(props.theme === 'tdf') {
          p.background(p.color(tdfColors.background));
          if(colorIndex === 0) {
            p.fill(p.color(tdfColors.primary));
          } else if(colorIndex === 1) {
            p.fill(p.color(tdfColors.secondary));
          } else if(colorIndex === 2) {
            p.fill(p.color(tdfColors.background));
          } else if(colorIndex === 3) {
            p.fill(p.color(tdfColors.text));
          }
          p.rect(getRandomObjectPosition(p, props.width, 200), getRandomObjectPosition(p, props.height, 200), 200, 200);
        } else if(props.theme === 'dark') {
          p.background(p.color(darkColors.background));
          if(colorIndex === 0) {
            p.fill(p.color(darkColors.primary));
          } else if(colorIndex === 1) {
            p.fill(p.color(darkColors.secondary));
          } else if(colorIndex === 2) {
            p.fill(p.color(darkColors.background));
          } else if(colorIndex === 3) {
            p.fill(p.color(darkColors.text));
          }
          p.ellipse(getRandomObjectPosition(p, props.width, 500), getRandomObjectPosition(p, props.height, 500), 500, 500);
        } else if(props.theme === 'green-sea') {
          p.background(p.color(greenSeaColors.background));
          if(colorIndex === 0) {
            p.fill(p.color(greenSeaColors.primary));
          } else if(colorIndex === 1) {
            p.fill(p.color(greenSeaColors.secondary));
          } else if(colorIndex === 2) {
            p.fill(p.color(greenSeaColors.background));
          } else if(colorIndex === 3) {
            p.fill(p.color(greenSeaColors.text));
          }
          p.rect(getRandomObjectPosition(p, props.width, 200), getRandomObjectPosition(p, props.height, 200), 200, 200);
        } else if(props.theme === 'neon-night') {
          p.background(p.color(neonNightColors.background));
          if(colorIndex === 0) {
            p.fill(p.color(neonNightColors.primary));
          } else if(colorIndex === 1) {
            p.fill(p.color(neonNightColors.secondary));
          } else if(colorIndex === 2) {
            p.fill(p.color(neonNightColors.background));
          } else if(colorIndex === 3) {
            p.fill(p.color(neonNightColors.text));
          }
          p.ellipse(getRandomObjectPosition(p, props.width, 500), getRandomObjectPosition(p, props.height, 500), 500, 500);
        }
    }
  }

  const transitionToPatagonKnot = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 500);
    object.y = getRandomObjectPosition(p, props.height, 500);

  }

  const transitionToTDF = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 200);
    object.y = getRandomObjectPosition(p, props.height, 200);
  }

  const transitionToDark = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 500);
    object.y = getRandomObjectPosition(p, props.height, 500);
  }

  const transitionToGreenSea = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 200);
    object.y = getRandomObjectPosition(p, props.height, 200);
  }

  const transitionToNeonNight = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 500);
    object.y = getRandomObjectPosition(p, props.height, 500);
  }

  const moveToPosition = (p, object) => {
    object.x = getRandomObjectPosition(p, props.width, 500);
    object.y = getRandomObjectPosition(p, props.height, 500);
  }

  const createBigCircle = (p) => {
      p.ellipse(getRandomObjectPosition(p, props.width, 500), getRandomObjectPosition(p, props.height, 500), 500, 500);
  }

  const createMidCircle = (p) => {
      p.ellipse(p.random(0, p.width)-400, p.random(0, p.height)-400, 400, 400)
  }

  const createSmallCircle = (p) => {
      p.ellipse(p.random(0, p.width)-300, p.random(0, p.height)-300, 300, 300)
  }

  const createBigRectangle = (p) => {
      p.rect(getRandomObjectPosition(p, props.width, 200), getRandomObjectPosition(p, props.height, 200), 200, 200)
  }

  const createMidRectangle = (p) => {
      p.rect(p.random(0, p.width)-150, p.random(0, p.height)-150, 150, 150)
  }

  const createSmallRectangle = (p) => {
      p.rect(p.random(0, p.width)-100, p.random(0, p.height)-100, 100, 100)
  }

  const createBigTriangle = (p) => {
      p.triangle(p.width / 2, p.height / 2, p.width / 2, p.height / 2, p.width / 2, p.height / 2)
  }

  const createMidTriangle = (p) => {
      p.triangle(p.random(0, p.width), p.random(0, p.height), p.width / 2, p.height / 2, p.width / 2, p.height / 2)
  }

  const createSmallTriangle = (p) => {
      p.triangle(p.random(0, p.width), p.random(0, p.height), p.width / 2, p.height / 2, p.width / 2, p.height / 2)
  }

  const getRandomObjectPosition = (p, maxValue, size) => {
      return p.min(maxValue-size, p.max(0, p.random(0, maxValue)));
  }


  const updateColor = (p, object) => {
      object.color = p.color(p.random(0, 255), p.random(0, 255), p.random(0, 255))
  }

  onMounted(() => {
    if ($p5) {
      p5Instance = new $p5(sketch, p5Canvas.value)
    }
  })
  
  onBeforeUnmount(() => {
    if (p5Instance) {
      p5Instance.remove()
    }
  })
  </script>
  
  <style scoped>
  div {
      width: 100vw;
      height: 100vh;
  }
  </style>
  