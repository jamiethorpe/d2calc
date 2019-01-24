import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        character: {
            classes: ['Amazon', 'Assasin', 'Barbarian', 'Druid', 'Paladin', 'Necromancer', 'Sorceress'],
            selected: ''
        },
    },
    mutations: {
        selectClass(state, character) {
            state.character.selected = character;
        }
    },
    getters: {
        character(state) {
            return state.character;
        },
    },
});
