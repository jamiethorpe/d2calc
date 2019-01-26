<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{ name: 'home' }">{{ appName }}</router-link>
<!-- 
                <div class="navbar-burger burger character-select" data-target="navMenu">
                    <a v-if="character.selected" class="navbar-link" href="#">{{ character.selected }}</a>
                    <a v-else class="navbar-link" href="#">Character</a>
                </div> -->
            </div>
            


            
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-start">
                    
                </div>

                <div class="navbar-end">
                        
                    <div @click="toggleActive" class="navbar-item has-dropdown is-hoverable character-select">
                        <a v-if="character.selected" class="navbar-link" href="#">{{ character.selected }}</a>
                        <a v-else class="navbar-link" href="#">Character</a>


                        <div class="navbar-dropdown" :class="{'is-active' : isActive, 'is-not-active' : !isActive}">
                            <router-link 
                            class="navbar-item"
                            v-show="character.selected != name"
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
                isActive: false,
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
            },
            toggleActive(event) {
                this.isActive = !this.isActive;
                
            }
        },
        mounted() {
            console.log('NavBar mounted..');
        }
    }
</script>

<style scoped>

.navbar-brand {
    font-family: 'Diablo Heavy', serif;
}

.character-select {
    /* margin-left: auto; */
    font-family: 'Roboto', sans-serif;
}

.navbar-dropdown.is-not-active {
    display: none;
}

.navbar-dropdown.is-active {
    display: block;
}
</style>

