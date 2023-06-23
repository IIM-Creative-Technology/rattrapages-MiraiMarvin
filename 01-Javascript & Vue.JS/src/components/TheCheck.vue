
<template>
  <div>
    <h3>{{ prenom ? prenom + ' ' + nom + ' à choisi sa salade!' : 'aucune commande existante...' }}</h3>
    <div v-if="prenom">
      <p class="recapex">
        Une salade à base de {{ saladBase }} avec les ingrédients suivants:
        {{ formattedList }} il à accompagné tout cela d'un {{ drink }}
        et il sera livré  à {{ livraison }}
        pour un total de {{ price}} $.
      </p>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
  export default {
    computed: {
      formattedList() {
        return this.selectedIngredients.join(', ');
      },

      formData() {
        return this.$store.getters.formData;
      },
      ...mapState({
        nom: state => state.formData.name,
        prenom: state => state.formData.firstName,
        saladBase: state => state.formData.saladBase,
        selectedIngredients: state => state.formData.selectedIngredients,
        drink: state => state.formData.drink,
        price: state => state.formData.prix,
        livraison: state => state.formData.Hlivraison,


      }),

    },

  }
</script>

<style scoped>

</style>
