<template>
  <div class="gallery">
    <div class="gallery__layout">
    <card-creative/>
    <card-creative/>
    <card-creative/>
    <card-creative/>
      <card-creative/>
      <card-creative/>
    </div>

  </div>

</template>

<script setup>


import CardCreative from './CardCreative.vue'
</script>

<style scoped>

.gallery{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery__layout {
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 2rem;
}
</style>