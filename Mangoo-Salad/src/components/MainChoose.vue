<script setup>
import TheCheck from "@/components/TheCheck.vue";

</script>


<template>

  <section class="left">
    <div class="top">
      <h4>Mangoo</h4>
    </div>
    <div class="check">
    <TheCheck />
    </div >
    <div class="recap">
      <h2>Votre Commande, {{formData.firstName}}</h2>
      <p>Base de salade: {{ formData.saladBase }}</p>
      <p>Ingrédients: {{ formData.selectedIngredients }}</p>
      <p>Boisson: {{ formData.drink }}</p>
      <p class="price">Prix total: {{ totalPrice }}$</p>
      <p>heure de livraison : {{formData.Hlivraison}}</p>
    </div>
  </section>
  <section class="mid">

  </section>


<section class="right">
  <div class="choice">
    <h1>Composer votre salade !</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="one_sect">
        <label for="name">Nom:</label>
        <input class="inputI" id="name" v-model="formData.name" required>
      </div>
      <div class="one_sect">
        <label for="firstName">Prénom:</label>
        <input class="inputI" type="text" id="firstName" v-model="formData.firstName" required>
      </div>
      <div class="one_sect">
        <label for="address">Adresse:</label>
        <input  class="inputI" type="text" id="address" v-model="formData.address" required>
      </div>
      <div class="one_sect">
        <label for="address">heure de livraison</label>
        <input class="inputI" type="text" id="address" v-model="formData.Hlivraison" required>
      </div>

      <div class="one_sect">
        <label for="age">Âge:</label>
        <input class="inputI" type="number" id="age" v-model="formData.age" required>
      </div>
      <div class="one_sect">
        <label for="salad">Base de salade:</label>
        <select  class="inputB" id="salad"  v-model="formData.saladBase">
          <option v-for="saladbase in saladBase" :value="saladbase.name">{{ saladbase.name }}, +{{saladbase.prix}}$</option>
        </select>
      </div>
      <div class="choicegrid">
        <label for="ingredients">Ingrédients:</label>
        <div v-for="ingredient in ingredients" :key="ingredient.id" class="radiopuce" >
          <input type="checkbox" :id="ingredient.id" :value="ingredient.name" v-model="formData.selectedIngredients" @change="handleCheckboxChange">
          <label class="lab" :for="ingredient.id">{{ ingredient.name }}, +{{ingredient.prix}}$</label>
        </div>
      </div>
      <div class="one_sect">
        <label for="drink">Boisson:</label>
        <select class="inputB" v-model="formData.drink">
          <option v-for="drink in drinks" :value="drink.name">{{ drink.name }}, +{{drink.prix}}$</option>
        </select>
      </div>
      <button type="submit" class="inputA">Envoyer</button>
    </form>
  </div>
</section>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        Hlivraison: '',
        firstName: '',
        age: null,
        SaladBase: '',
        selectedIngredients: [],
        drink: '',
        prix: 0,
      },

      saladBase: [
        { id: '10', name: 'riz', prix: 2.5 },
        { id: '11', name: 'pates', prix: 2.5 },
        { id: '12', name: 'Salade', prix: 2.5 },
      ],

      ingredients: [
        { id: '1', name: 'grenade', prix: 1.5 },
        { id: '2', name: 'cheese', prix: 2.5 },
        { id: '3', name: 'melon', prix: 4.5 },
        { id: '4', name: 'tomate', prix: 0.5 },
        { id: '5', name: 'oeuf', prix: 3.5 },
        { id: '6', name: 'jambon', prix: 3.5 },
        { id: '7', name: 'avocat', prix: 2.0 },
        { id: '8', name: 'poivron', prix: 1.0 },
        { id: '9', name: 'oignon rouge', prix: 0.5 },
        { id: '10', name: 'olives', prix: 1.5 },
        { id: '11', name: 'concombre', prix: 1.0 },
        { id: '12', name: 'feta', prix: 2.0 },
        { id: '13', name: 'noix', prix: 2.5 },
        { id: '14', name: 'poulet grillé', prix: 4.0 },
        { id: '15', name: 'maïs', prix: 1.0 },
        { id: '16', name: 'carotte râpée', prix: 0.5 },
        { id: '17', name: 'céleri', prix: 1.0 },
        { id: '18', name: 'persil frais', prix: 0.5 }
      ],

      drinks: [
        { id: '7', name: 'coca', prix: 1.5 },
        { id: '8', name: "jus d'orange", prix: 2.5 },
        { id: '9', name: 'ice tea', prix: 2.5 },
        { id: '10', name: 'eau plate', prix: 0.0 },
        { id: '11', name: 'eau pétillante', prix: 0.0 },
        { id: '12', name: 'limonade', prix: 2.0 },
        { id: '13', name: 'thé vert', prix: 2.0 },
        { id: '14', name: 'café glacé', prix: 3.0 },
        { id: '15', name: 'smoothie aux fruits', prix: 3.5 },
        { id: '16', name: 'cocktail sans alcool', prix: 4.0 },
        { id: '17', name: 'jus de pomme', prix: 2.0 },
        { id: '18', name: 'infusion de fruits', prix: 2.5 }

      ],
    };
  },
  computed: {
    formattedList() {
      return this.selectedIngredients.join(', ');
    },
    totalPrice() {
      let price = 0;

      const saladBase = this.saladBase.find(base => base.name === this.formData.saladBase);
      if (saladBase) {
        price += saladBase.prix;
      }

      for (const ingredient of this.formData.selectedIngredients) {
        const ingredientPrice = this.ingredients.find(item => item.name === ingredient)?.prix;
        if (ingredientPrice) {
          price += ingredientPrice;
        }
      }

      const drinkPrice = this.drinks.find(drink => drink.name === this.formData.drink)?.prix;
      if (drinkPrice) {
        price += drinkPrice;
      }
      return price.toFixed(2);
    },
    },

  methods: {
    handleCheckboxChange() {
      if (this.formData.selectedIngredients.length > 4) {
        this.formData.selectedIngredients.pop();
      }
    },

    submitForm() {

      this.$store.commit('updateFormData', this.formData);
      this.$store.commit('updateTotalPrice', this.totalPrice);


      this.formData = {
        name: '',
        address: '',
        Hlivraison: '',
        firstName: '',
        age: null,
        saladBase: '',
        selectedIngredients: [],
        drink: '',
        prix: 0,
      };

  },

},
};
</script>
