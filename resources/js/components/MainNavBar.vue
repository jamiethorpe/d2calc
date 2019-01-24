<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{ name: 'home' }">{{ appName }}</router-link>

                <!-- <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> -->
            </div>

            <div class="navbar-menu" id="navMenu">
                <div class="navbar-start">
                    
                </div>
                
                <div v-if="character.selected" class="navbar-item has-text-centered">
                    <span class="selected-character">{{ character.selected }}</span>
                </div>

                <div class="navbar-end">

                    <!-- <div class="navbar-item">
                        <div class="select">
                            <select @change="selectClass">
                                <option disabled>Character</option>
                                <option v-for="(name, index) in character.classes" :key="index">{{ name }}</option>
                            </select>
                        </div>
                    </div> -->
                    <!-- <a class="navbar-item has-dropdown is-hoverable" href="/register">Character</a> -->
                        
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">Characters</a>

                        <div class="navbar-dropdown">
                            <router-link 
                            class="navbar-item" 
                            v-for="(name, index) in character.classes"
                            :key="index"
                            :to="link(name)">
                                {{ name }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            character() {
                return this.$store.getters.character;
            },
        },
        methods: {
            link(character) {
                return '/' + character;
            }
        },
        mounted() {
            console.log('NavBar mounted.');
        }
    }
</script>

<style scoped>

.navbar-brand {
    font-family: 'Diablo Heavy', serif;
}

.selected-character {
    font-family: 'Roboto', serif;
}

</style>

