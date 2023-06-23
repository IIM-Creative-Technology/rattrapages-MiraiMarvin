
<template>
  <div>
    <h3>{{ prenom ? prenom + ' ' + nom + ' a choisi !' : 'Rien à voir' }}</h3>
    <div v-if="prenom">
      <p>
        Une salade à base de {{ saladBase }} avec les ingrédients suivants
        {{ formattedList }} et il s'est désaltéré avec un {{ drink }}
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


      }),

    },

  }
</script>

<style scoped>

</style>
