<template>
  <section class="container mt-5">
    <div class="row flex-wrap">
      <div v-for="video in arrayVideos" :key="video.id" class="cards__item rounded position-relative col-12 col-md-3 mb-2 mb-md-5">
        <AfexVideoCard video="video"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import AfexVideoCard from "./common/AfexVideoCard.vue";

export default {
  name: 'GaleriaComponent',
  methods: {
    // Método para actualizar galeria
    cargarGaleria: function (){
      this.arrayVideos = [] // Corrijo problema de cache
      this.axios.get(this.apiAWS + 'videos', {
      }).then(response => {
        const respuesta = response.data.Items.map(obj => obj.id)
        respuesta.forEach(element => {
          this.procesarURL(element)
        });
      }).catch(error => {
        this.$alertify.error('Ha ocurrido un error');
        console.log(error)
      })
    },
    // Metodo para procesar la URL recibida, y obtener datos
    procesarURL: function (idVideo) {
      this.axios.get(this.apiGoogle + idVideo + this.keyGoogle + '&part=snippet', {
      }).then(response => {
        this.arrayVideos.push({
          id: response.data.items[0].id,
          titulo: response.data.items[0].snippet.title,
          descripcion: response.data.items[0].snippet.description,
          thumbnail: response.data.items[0].snippet.thumbnails.standard ? response.data.items[0].snippet.thumbnails.standard.url : response.data.items[0].snippet.thumbnails.high.url
        })
      }).catch(error => {
        this.$alertify.error('Ha ocurrido un error');
        console.log(error)
      })
    },
    // Método para eliminar video
    deleteVideo: function (id) {
      this.$emit('deleteVideo', id)
    },
    // Metodo para mostrar detalles del video
    showDetails: function (id) {
      const obj = this.arrayVideos.filter(el => el.id === id)
      this.$emit('showDetails', obj, true)
    }
  },
  mounted () {
    // Una vez desplegado el componente, cargamos galeria
    this.cargarGaleria()
  },
  data () {
    return {
      // Array con videos cargados
      arrayVideos: []
    }
  }
}
</script>