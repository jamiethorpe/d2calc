<template>
    <div class="container">
        <div class="columns">
            <div class="column is-12 has-text-centered">
                <img class="d2logo" src="/img/d2logo.png" alt="Diablo 2 Logo">
                <h2 class="home-title">Skill Calculator</h2>
                <!-- <img src="/img/d2chars.jpg" alt="Diablo 2 character selection screen"> -->
            </div>
        </div>
        <div class="columns is-multiline is-centered">
            <div v-for="(character,index) in characters" :key="index" class="column is-12 has-text-centered">
                <button @click="selectClass(character)" class="button character-button">{{ character }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        computed: {
            characters() {
                return this.$store.getters.classes;
            }
        },
        methods: {
            selectClass(character) {
                this.$store.commit('selectClass', character);
                this.$router.push('/' + character);
            },
        },
        mounted() {
            this.$store.commit('selectClass', '');
        }
    }
</script>

<style scoped>

.character-button {
    background-color: #beb8a2;
    color:#190A09;
    border-color: #868274;
}

.home-title {
    font-size: 1.5rem;
    font-family: 'Diablo Heavy', serif;
    color:#beb8a2;
}

.d2logo {
    max-width: 350px;
}


@media(max-width: 500px) {
    .d2logo {
        width: 80%;
    }

    .character-button {
        width: 90%;
    }
}

@media(min-width:501px) {
    .d2logo {
        width: 50%;
    }

    .character-button {
        width: 50%;
    }
}


</style>

