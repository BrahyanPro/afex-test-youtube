<template>
  <h2>Añadir un nuevo video</h2>
  <form class="container-input">
    <input type="text" class="input-add" v-model="currentUrl" placeholder="Añadir">
    <button class="add-url" type="button" v-on:click="validateURl">Añadir</button>
  </form>


</template>

<script setup>
import DataServices from '../utils/services.js'
import {ref} from 'vue'

let currentUrl = ref('')
const getVideoId = () => currentUrl.value.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1]
const emit = defineEmits(['renderGallery'])
const validateURl = () => DataServices.validateUnique(getVideoId()).then(() => {emit('renderGallery'); currentUrl.value = ''})
</script>


<style scoped>
.container-input {
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .container-input {
    width: 80%;
  }
}

.input-add {
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.input-add:focus {
   outline: none;
   color: #00B4CC;
   border-color: #0099ff;
   box-shadow: 0 0 5px 0 rgba(0, 153, 255, 0.5);
}

.input-add::-webkit-outer-spin-button,
.input-add::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
 }

.add-url {
  min-width: 6rem;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.add-url:hover {
   cursor: pointer;
   background-color: #00bfff;
 }

.add-url:active {
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
 }
</style>