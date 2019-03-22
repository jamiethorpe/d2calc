import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        character: {
            classes: ['Amazon', 'Assasin', 'Barbarian', 'Druid', 'Paladin', 'Necromancer', 'Sorceress'],
            selected: ''
        },
        tree: '',
    },
    mutations: {
        selectClass(state, character) {
            state.character.selected = character;
        },
        setTree(state, tree) {
            state.tree = tree;
        }
    },
    getters: {
        character(state) {
            return state.character;
        },
        tree(state) {
            return state.tree;
        }
    },
});
