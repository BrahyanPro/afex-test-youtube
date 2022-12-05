<template>
  <div class="gallery">
    <div class="gallery__layout" >
      <card-creative @renderFather="emit('renderGallery')" @showModal="showModalInfo" v-for="card in galleryData" :key="card.id"  :title="card.title" :image="card.thumbnail" :time="card.time" :id="card.id"/>
    </div>
  </div>

</template>

<script setup>


import CardCreative from './CardCreative.vue'
import DataServices from '../utils/services.js'
import {onMounted, ref, watchEffect} from 'vue'

const emit = defineEmits(['handleShowModal'])

const showModalInfo = (id) => {
  let obj = galleryData.value.find((item) => item.id === id)
  emit('handleShowModal', obj)
}

let galleryData= ref(null)

watchEffect(
  async () => {
    galleryData.value = await DataServices.getAll()
  }
)
const loadData = async () => {
  galleryData.value = await DataServices.getAll(galleryData)
}

onMounted(() => {
  loadData()
})

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
  max-width: 1400px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 2rem;
}
</style>