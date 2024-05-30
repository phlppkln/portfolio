<template>
  <div>
    <h1><i class="bi bi-joystick"></i> Playground</h1>
    <p>
      Playing around with code can be fun. Here you can find some experimental ideas and projects. No guarantees for how they look or what they do.
      Things might be broken.
    </p>

    <div class="projects-grid">
      <TheBaseCard
        v-for="i in 20"
        :key="i"
        :imageSrc="`https://picsum.photos/200/300?random=${i}`"
        :imageAlt="`Project ${i}`"
        :cardTitle="`Project ${i}`"
        :cardDescription="`Project Description ${i}`"
      />
    </div>

    
<div>
    <canvas id="three-canvas"></canvas>
</div>
  </div>
</template>

<script setup lang="ts">

import * as THREE from 'three';

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( innerWidth, innerHeight );
    document.body.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x3dbc59, wireframe: true} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    animate();
    
    function animate() {
        
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

</script>

<style scoped lang="scss">

</style>
