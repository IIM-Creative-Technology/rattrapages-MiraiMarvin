

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
                firstName: '',
                age: null,
                SaladBase: '',
                selectedIngredients: [],
                drink: [],
                prix: 0,
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
        formDataS: (state) => state.formData,
    },
});

createApp(App).use(store).mount('#app');