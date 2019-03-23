<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{ name: 'home' }">{{ appName }}</router-link>
            </div>
            
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-start">
                    
                </div>
                <div class="navbar-end">
                    <div v-on-clickaway="notActive" @click="toggleActive" class="navbar-item has-dropdown character-select">
                        <a v-if="selectedClass" class="navbar-link" href="#">{{ selectedClass }}</a>
                        <a v-else class="navbar-link" href="#">Character</a>

                        <div class="navbar-dropdown" :class="{'is-active' : isActive, 'is-not-active' : !isActive}">
                            <a
                            href="#"
                            @click="selectClass(name)"
                            class="navbar-item"
                            v-show="selectedClass != name"
                            v-for="(name, index) in classes"
                            :key="index">
                                {{ name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],
        data() {
            return {
                isActive: false,
            }
        },
        computed: {
            classes() {
                return this.$store.getters.classes;
            },
            selectedClass() {
                return this.$store.getters.selectedClass;
            }
        },
        methods: {
            selectClass(character) {
                this.$store.commit('selectClass', character);
                this.$router.push('/' + character);
            },
            toggleActive() {
                this.isActive = !this.isActive;
                
            },
            notActive() {
                this.isActive = false;
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

.navbar-brand {
    font-family: 'Diablo Heavy', serif;
}

.character-select {
    font-family: 'Roboto', sans-serif;
    padding: 0 0.75rem;
}

.navbar-dropdown.is-not-active {
    display: none;
}

.navbar-dropdown.is-active {
    display: block;
}
</style>

