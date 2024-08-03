<template>
    <div ref="p5Canvas"></div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  import { useNuxtApp } from '#app'
  
  const p5Canvas = ref(null)
  let p5Instance = null
  
  const { $p5 } = useNuxtApp()
  
  const sketch = (p) => {
    p.setup = function() {
      p.createCanvas(400, 400)
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
    width: 100%;
    height: 100%;
  }
  </style>
  