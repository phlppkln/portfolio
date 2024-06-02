<template>
  <div class="container">
    <h1>Three.js Experiments</h1>
    <p>This page features some experiments with Three.js</p>
    <div class="scene-container">
      <canvas id="three-canvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

<style lang="scss"></style>
