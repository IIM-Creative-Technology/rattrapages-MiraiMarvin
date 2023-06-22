

import './assets/main.css'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        nom: '',
        adresse: '',
        prenom: '',
        age: 0,
        basesSalades: [],
        ingredients: [],
        boissons: [],
        prix: 0,
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {},
});

createApp(App).use(store).mount('#app');