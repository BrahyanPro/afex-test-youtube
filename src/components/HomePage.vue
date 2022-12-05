<template>
  <div class="home">
    <InputAddUrl/>
    <Gallery />
  </div>
</template>

<script setup>
import InputAddUrl from './InputAddUrl.vue'
import Gallery from './Gallery.vue'
import { ref } from 'vue'

</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>