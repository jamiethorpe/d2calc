<template>
    <div>
        Amazon
        <!-- <tree-tabs></tree-tabs> -->
        <!-- <javelin-spear-tree></javelin-spear-tree>
        <passive-magic-tree></passive-magic-tree>
        <bow-crossbow-tree></bow-crossbow-tree> -->
    </div>
</template>

<script>
export default {
    name: 'Amazon',
    data() {
        return {
            class: 'Amazon',
        }
    },
    methods: {
        selectClass() {
            this.$store.commit('selectClass', this.class);
        },
    },
    mounted() {
        this.selectClass();
    }
} 
</script>

<style>
    
</style>