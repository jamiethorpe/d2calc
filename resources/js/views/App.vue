<template>
    <div>
        <main-nav-bar></main-nav-bar>
        <router-view></router-view>
    </div>
</template>
<script>
    import mainNavBar from '../components/MainNavBar.vue';

    export default {
        components: {
            'main-nav-bar': mainNavBar,
        },
    }
</script>