<template>
    <div>
        Home page
    </div>
</template>

<script>
    export default {
        components: {
        },
        mounted() {
            this.$store.commit('selectClass', '');
        }
    }
</script>

<style scoped>

</style>

