<script setup>
import MainChoose from './components/MainChoose.vue'
</script>

<template>
 <section class="main">
   <div class="left">

   </div>
   <div class="right">
     <MainChoose />

   </div>
 </section>


</template>

<style scoped>

main{
  width: 100%;
  height: 100vh;
  border: 2px solid #181818;
  padding: 20px;
}
.left{
  width: 30%;
  height: 100%;
  border: 2px solid #181818;
  float: left;
}
.right{
  width: 70%;
  height: 100%;
  border: 2px solid #181818;
  float: right;
}

</style>
