<template>
    <div class="container">
        <h1>P5</h1>

        <p>This is a P5 sketch in the background. </p>
        <div class="p5-sketch">
            <P5Sketch></P5Sketch>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>

  <style scoped lang="scss">
  .p5-sketch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
  }
  </style>
  