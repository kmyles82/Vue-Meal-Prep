import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search'
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    actions: {
        async getRecipes({ state, commit }, payload) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: payload,
                        app_id: '17e29e90',
                        app_key: '1f0b2aebf793a32d9c18eb82a8e7abed',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        }
    },
    modules: {}
});
