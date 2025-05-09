<template>
  <div id="app">
    <Home />
  </div>
</template>

<script setup>
import Home from './views/Home.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: transparent; /* WAS: background-color: #121212 */
  color: #ffffff;
  height: 100%;
}
#app {
  padding: 1rem;
  height: 100%;
  background: transparent;
}


</style>
