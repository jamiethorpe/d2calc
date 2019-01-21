<template>
    <div>
        <main-nav-bar></main-nav-bar>
        Home page
    </div>
</template>

<script>
    import mainNavBar from '../components/MainNavBar.vue';
    export default {
        components: {
            'main-nav-bar': mainNavBar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>

</style>

