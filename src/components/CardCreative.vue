<template>
  <div class="card--recipe" >
    <img class="card--recipe__img" :src="image" :alt="title" v-on:click="showModalInfo(id)"/>
    <div class="card--recipe__play" v-on:click="showModalInfo(id)">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/372262/Play.svg" alt="boton play"/>
    </div>

    <div class="card--recipe__content">
<!--      <h3 class="card&#45;&#45;recipe__title">{{title}}</h3> Tenia planeado ponerle el titulo pero nose que clase de jefes son XD, el figma no lo tiene y pumba -->
      <ul class="card--recipe__labels">
        <li class="card--recipe__label-category" v-on:click="handleDeleteCard(id)">
          <font-awesome-icon icon="fas fa-trash-alt" />
          Eliminar
        </li>
        <li class="card--recipe__label afex">
          <font-awesome-icon icon="fa-solid fa-money-bill-trend-up" />
          Afex
        </li>
        <li class="card--recipe__label">
          <font-awesome-icon icon="fa-solid fa-clock" />
          {{parseISO8601Duration(time)}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import alert from '../utils/alert.js'
import DataServices from '../utils/services.js'
import {parseISO8601Duration} from '../utils'

const emit = defineEmits(['showModal', 'renderFather'])

const showModalInfo = (id) => {
  emit('showModal', id)
}


defineProps({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const handleDeleteCard = (id) => {
  console.log('delete')
  console.log(id)
  alert.confirm('¿Estas seguro de eliminar este video?', () => deleteFirestore(id).then(() => emit('renderFather')))
}

const deleteFirestore = async (id) => await DataServices.delete(id)


</script>

<style scoped>
.card--recipe {
  position: relative;
  width: 320px;
  height: 180px;
  border-radius: 12px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.04), 0 7px 18px 0 rgba(0, 0, 0, 0.05), 0 12px 24px 0 rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.25s ease;
  cursor: pointer;
}
.card--recipe__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.card--recipe::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  top: 50%;
  right: 0;
  background: #000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 2;
  content: '';
}
.card--recipe__play {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: calc(50% - 23px);
  top: calc(42% - 25px);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: white;
  z-index: 3;
}
.card--recipe__play img {
  width: 30%;
}
.card--recipe__content {
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 26px 26px 34px 26px;
  width: 100%;
  z-index: 3;
}
/*.card--recipe__title {*/
/*  color: white;*/
/*  font-size: 0.9rem;*/
/*  margin: 0;*/
/*  font-weight: 900;*/
/*  margin-bottom: 8px;*/
/*}*/
.card--recipe__labels {
  margin: 0;
  padding: 0;
  list-style: none;
}
.card--recipe__labels .afex {
  background-color: #00462c;
}

.card--recipe__label-category, .card--recipe__label {
  border-radius: 3px;
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.card--recipe__label-category {
  background: #2B3044;
}
.card--recipe__label-category:hover {
  background: #D23369;
}
.card--recipe.is--playing video {
  opacity: 1;
}
.card--recipe[data-tilt] {
  transform-style: preserve-3d;
}
.card--recipe[data-tilt] .card--recipe__play {
  transform: translateZ(20px);
}
.card--recipe[data-tilt] .card--recipe__content {
  transform: translateZ(20px);
}
.card--recipe[data-tilt]:hover {
  box-shadow: 0 12px 18px 0 rgba(0, 0, 0, 0.08), 0 8px 18px 0 rgba(0, 0, 0, 0.08), 0 19px 28px 0 rgba(0, 0, 0, 0.1);
}
</style>