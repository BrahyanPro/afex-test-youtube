<template>
  <i class="cards__delete position-absolute bi bi-x d-flex align-self-center" data-bs-toggle="modal" data-bs-target="#modalEliminar" v-on:click="deleteVideo(video.id)"></i>
  <img class="img-fluid" :src="video.thumbnail" :alt="video.description" data-bs-toggle="modal" data-bs-target="#modalDetalles" v-on:click="showDetails(video.id)">
</template>

<script>

export default {
  props: {
    video : {
      thumbnail : String,
      description : String,
      id : String
    }
  },
  setup(props) {
    console.log(props)
    const deleteVideo = (id) => {
      console.log(id)
    }
    const showDetails = (id) => {
      console.log(id)
    }
    return {
      deleteVideo,
      showDetails
    }
  },
  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<style scoped>
:root{
  --main-bg-color: #f0f0f0;
  background-color: var(--main-bg-color);
}
/* Custom CSS */
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 3rem;
  background-color: var(--main-bg-color);
  scroll-behavior: smooth;
}
/* Boton añadir */
.inputUrl__button{
  width: 8em;
  font-weight: bold;
}
/* Video en galeria */
.cards__item{
  cursor: pointer;
}
.cards__delete{
  top: 10px;
  right: 30px;
  font-size: 2em;
  background: rgba(0,0,0, .8);
  color: #fff;
}
.cards__delete:hover{
  background-color: red;
}
/* Modal */
.modal-dialog{
  max-width: 65rem;
}
.container__descripcion{
  max-height: 10rem;
  overflow-y: auto;
}
.thumbail__overlay{
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transition: .2s ease;
}
.thumbail__overlay a{
  color: #fff;
}

/* Modal eliminar */
.btn--cancelar{
  color: #0d6efd;
  border: 1px solid #0d6efd;
}
</style>