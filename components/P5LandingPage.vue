<template>
    <div ref="p5Canvas"></div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  import { useNuxtApp } from '#app'
  
  const p5Canvas = ref(null)
  let p5Instance = null
  
  const { $p5 } = useNuxtApp()

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})

  const sketch = (p) => {
    p.setup = function() {
      p.createCanvas(props.width, props.height)
    }
  
    p.draw = function() {
      p.background(200)
      p.ellipse(p.width / 2, p.height / 2, 50, 50)
    }

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
  