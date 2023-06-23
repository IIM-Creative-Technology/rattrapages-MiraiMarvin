

import './assets/main.css'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        updateFormData(state, formData) {
            state.formData = formData;
        },
        updateTotalPrice(state, prix) {
            state.formData.prix = prix;
        }
    },
    actions: {},
    modules: {},
    getters: {
        formData: (state) => state.formData,
    },
});

createApp(App).use(store).mount('#app');