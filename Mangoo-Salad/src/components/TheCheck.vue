

<template>

    <div>
      <h1>dernière commande</h1>
      <p>la commande de {{ formData.name }}</p>
      <p> salade a base de  {{ formData.SaladBase}}</p>
      <p> avec les ingrédients suivant {{ formData.selectedIngredients}}</p>
      <p> et une boisson {{ formData.drink}}</p>
    </div>
</template>

<script>
  export default {
    computed: {
      formData() {
        return this.$store.getters.formData;
      },
    },
  }
</script>

<style scoped>

</style>
