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
                
                <!-- <div v-if="character" class="navbar-item has-text-centered">
                    <span class="artist has-text-link"><i>{{ character.name }}</i></span>
                </div> -->

                <div class="navbar-end">

                    <div class="navbar-item">
                        <div class="select">
                            <select @change="selectClass">
                                <option disabled>Character</option>
                                <option v-for="(name, index) in character.classes" :key="index">{{ name }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- <a class="navbar-item has-dropdown is-hoverable" href="/register">Character</a>
                        
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">{{ user.name }}</a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/logout">
                                Logout
                            </a>
                        </div>
                    </div> -->
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
            }
        },
        methods: {
            selectClass(event) {
                this.$store.commit('selectClass', event.target.value)
            },
        },
        mounted() {
            console.log('NavBar mounted.');
        }
    }
</script>

<style scoped>
.artist {
    font-weight: bold;
    border-bottom: thin #a7a7a7 solid;
}

.song-title {
    font-weight: bold;
}

.input {
    border-bottom: thin #a7a7a7 solid;
    border-right: none;
    border-left: none;
    border-top: none;
    -webkit-box-shadow: inset 0 0 0 rgba(10, 10, 10, 0.1);
    box-shadow: inset 0 0 0 rgba(10, 10, 10, 0.1);
    border-radius: 0px;
}

.key {
    font-size: 3rem;
}

</style>

