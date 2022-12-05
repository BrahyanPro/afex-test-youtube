<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="">
<!--    <div v-if="show" >-->
<!--      <div class="modal-dialog" role="document">-->
<!--        <div class="modal-content">-->
<!--          <div class="modal-header">-->
<!--            <button type="button" class="close" @click="$emit('close')" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
<!--            &lt;!&ndash;           <h4 class="modal-title" id="myModalLabel">Modal title</h4> &ndash;&gt;-->
<!--          </div>-->
<!--          <div class="modal-body">-->
<!--            <h4>Are you sure you want to delete this block?</h4>-->
<!--          </div>-->
<!--          <div class="modal-footer">-->
<!--            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>-->
<!--            <button type="button" class="btn btn-main">Delete</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <!--           <h4 class="modal-title" id="myModalLabel">Modal title</h4> -->
          </div>
          <div class="modal-body">
            <h4>Are you sure you want to delete this block?</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-main">Delete</button>
          </div>
        </div>
      </div>
    </div>

  </Transition>
</template>

<style>
.top-elements {
  height: 3em;
  width: 100%;
  color:white;
  text-align: center;
  line-height:3em;
}
.red {background-color:red;}
.green {background-color:green;}
.rest {
  background: rgba(134,156,173,.7);
  width: 100%;
  height: 100vh;
  top:0px;
}
.main-button {margin: 25% 41%;}
/* .fade.in {top:10.4%;} */
.btn-main {background-color:#E85365;border:none;color:white;padding:.5em 1.75em;}
.btn-default {background:none;border:none;color:#3975cc;padding:.5em 1.75em;margin-right:1.5em;}
.modal-dialog {margin: 100px auto;}
.modal-header {border-bottom: transparent;padding:1em 1em;}
.modal-content {background-color: #d8d8d8;}
.modal-body {padding: 0em 4em;margin-top:-.5em;}
.modal-footer {border-top:transparent;padding:1.5em 3em 2.5em 0em;}
</style>