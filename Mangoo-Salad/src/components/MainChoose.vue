<template>
  <div>
    <h1>Formulaire</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="address">Adresse:</label>
        <input type="text" id="address" v-model="formData.address" required>
      </div>
      <div>
        <label for="firstName">Prénom:</label>
        <input type="text" id="firstName" v-model="formData.firstName" required>
      </div>
      <div>
        <label for="age">Âge:</label>
        <input type="number" id="age" v-model="formData.age" required>
      </div>
      <div>
        <label for="salad">Base de salade:</label>
        <div v-for="saladbase in saladBase" :key="saladBase.id">
          <input type="checkbox" :id="saladbase.id" :value="saladbase.name" v-model="formData.SaladBase">
          <label :for="saladbase.id">{{ saladbase.name }}</label>
        </div>
      </div>
      <div>
        <label for="ingredients">Ingrédients:</label>
        <div v-for="ingredient in ingredients" :key="ingredient.id">
          <input type="checkbox" :id="ingredient.id" :value="ingredient.name" v-model="formData.selectedIngredients">
          <label :for="ingredient.id">{{ ingredient.name }}</label>
        </div>
      </div>
      <div>
        <label for="drink">Boisson:</label>
        <select id="drink" v-model="formData.drink">
          <option value="drink1">Boisson 1</option>
          <option value="drink2">Boisson 2</option>
          <option value="drink3">Boisson 3</option>
        </select>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        firstName: '',
        age: null,
        SaladBase: [],
        selectedIngredients: [],
        drink: [],
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
      ],

      drinks: [
        { id: '7', name: 'coka', prix: 1.5 },
        { id: '8', name: 'orange juice', prix: 2.5 },
        { id: '9', name: 'ice tea', prix: 4.5 },
      ],
    };
  },
  methods: {
    submitForm() {
      // Envoyer les données du formulaire
      console.log(this.formData);
    },
  },
};
</script>
