<script setup>
import MainChoose from './components/MainChoose.vue'
import TheCheck from "@/components/TheCheck.vue";
</script>

<template>
 <section class="main">
   <div class="left">
     <h1>partie gauche</h1>
     <TheCheck />

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
