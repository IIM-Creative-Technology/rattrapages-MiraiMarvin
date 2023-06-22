

import './assets/main.css'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
            formData: {
                name: 'marvin',
                address: 'quoicoubaka',
                firstName: 'clerc',
                age: 20,
                SaladBase: 'salade',
                selectedIngredients: ['jambon','fruit','legume'],
                drink: ['coka'],
                prix: 10,
            },
    },
    mutations: {
        updateFormData(state, formData) {
            state.formData = formData;
        },
    },
    actions: {},
    modules: {},
    getters: {
        formData: (state) => state.formData,
    },
});

createApp(App).use(store).mount('#app');