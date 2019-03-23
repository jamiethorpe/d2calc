import Vue from 'vue';
import Vuex from 'vuex';
import Amazon from './characters/amazon.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        classes: ['Amazon', 'Assasin', 'Barbarian', 'Druid', 'Paladin', 'Necromancer', 'Sorceress'],
        selectedClass: '',
        characters: [
            Amazon,
        ],  
        tree: '',
        pointsSpent: 0,
        plusAllSkillsTotal: 0,
    },
    mutations: {
        selectClass(state, character) {
            state.selectedClass = character;
        },
        setTree(state, tree) {
            state.tree = tree;
        },
        increasePoints(state) {
            state.pointsSpent += 1;
        },
        decreasePoints(state, value) {
            state.pointsSpent -= value;
        },
        plusAllSkills(state) {
            state.plusAllSkillsTotal += 1;
        },
        minusAllSkills(state) {
            state.plusAllSkillsTotal -= 1;
        },
        resetAllSkills(state) {
            state.pointsSpent = 0;
            state.plusAllSkillsTotal = 0;
        }
    },
    getters: {
        classes(state) {
            return state.classes;
        },
        selectedClass(state) {
            return state.selectedClass;
        },
        tree(state) {
            return state.tree;
        },
        pointsSpent(state) {
            return state.pointsSpent;
        },
        plusAllSkillsTotal(state) {
            return state.plusAllSkillsTotal;
        },
        trees(state) {
            if (state.selectedClass) {
                return state.characters.find(character => character.class === state.selectedClass).trees;
            }
        },
    },
});
