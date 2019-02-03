
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//Promise polyfill
var Promise = require('es6-promise').Promise;

//Router - move this to separate file
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.mixin({
    data() {
        return {
            get appName() {
                return "D2Calc";
            }
        }
    },
    methods: {
        lowerFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        capFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toKebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        }
    }
});

//Helpers
import Helpers from './helpers';

import App from './views/App';
import Home from './views/Home';
import Amazon from './views/Amazon';
// import Assassin from './views/Assassin';
// import Barbarian from './views/Barbarian';
// import Druid from './views/Druid';
// import Paladin from './views/Paladin';
// import Necromancer from './views/Necromancer';
// import Sorceress from './views/Sorceress';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/amazon',
            name: 'Amazon',
            component: Amazon
        },
    ],
});


//Vuex store
import { store } from './store/store'

const app = new Vue({
    el: '#app',
    data: {
        
    },
    components: { App },
    store,
    router,
});

// Bulma NavBar Burger Script
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});