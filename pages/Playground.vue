<template>
  <div>
    <h1><i class="bi bi-joystick"></i> Playground</h1>
    <p>
      Playing around with code can be fun. Here you can find some experimental ideas and projects. No guarantees for how they look or what they do.
      Things might be broken.
    </p>
  {{ test }}
  <div class="custom-btn" @click="changeTest">Change Test</div>
  </div>
</template>

<script setup lang="ts">

const test = ref('test');
const counter = ref(0);

const changeTest = () => {
  test.value = 'changed' + counter.value;
  counter.value++;
}
</script>

<style></style>
