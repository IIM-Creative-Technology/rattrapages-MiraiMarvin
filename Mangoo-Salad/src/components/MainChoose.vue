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
        <select id="salad" v-model="formData.saladBase">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
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
          <option value="drink4">Boisson 4</option>
          <option value="drink5">Boisson 5</option>
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
        saladBase: '',
        selectedIngredients: [],
        drink: '',
      },
      ingredients: [
        { id: 'ingredient1', name: 'Ingrédient 1' },
        { id: 'ingredient2', name: 'Ingrédient 2' },
        { id: 'ingredient3', name: 'Ingrédient 3' },
        { id: 'ingredient4', name: 'Ingrédient 4' },
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
