<template>
  <div class="home">
    <InputAddUrl @renderGallery="renderGalleries" />
    <Gallery  @handleShowModal="(obj) => { data = obj; showModal = true}" :key="renderGalleryKey" v-on:renderGallery="renderGalleries"/>
  </div>
  <n-modal v-model:show="showModal"
           :mask-closable="false"
           preset="card"
           title="Información del video"
           :bordered="false"
           style="width: 900px"
           role="dialog"
           aria-modal="true"
           size="huge">
      <template #header-extra>
        {{ data.title }}
      </template>
      <div class="modal__content">
          <div>
            <YoutubeVue3 v-if="data" :videoid="data ? data.id : null" :width="500" :height="300"/>
          </div>
          <div>
            <p class="description">{{ data.description.substring(0, 100) }}</p>
            <!--Segun vi añadiendo el mismo video que tienen el figma, recortaron el string -->
          </div>
      </div>
      <template #footer>
        Desde el ❤️de Brahyan Pro para Afex 💚
      </template>
  </n-modal>
</template>

<script setup>
import InputAddUrl from './InputAddUrl.vue'
import { NModal } from 'naive-ui'
import Gallery from './Gallery.vue'
import { ref } from 'vue'
import { YoutubeVue3 } from 'youtube-vue3'


const showModal = ref(false)
let renderGalleryKey = ref(0)
let data = ref(null)

const renderGalleries = () => renderGalleryKey.value++



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
.modal__content {
  display: flex;
  justify-content: space-between;
}
.description{
  font-size: 1rem;
  text-align: justify;
  margin-left: 1.2rem;
}
</style>