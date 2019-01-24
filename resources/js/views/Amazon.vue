<template>
    <div>
        <div class="tabs is-centered">
            <ul>
                <li :class="{'is-active' : tree.isActive}" v-for="(tree, index) in trees" :key="index">
                    <a>{{ tree.name }}</a>
                </li>
            </ul>
        </div>
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
            trees: [
                {
                    name: 'Javelin and Spear',
                    isActive: true 
                },
                {
                    name: 'Passive and Magic',
                    isActive: false,
                },
                {
                    name: 'Bow and Crossbow',
                    isActive: false,
                },
            ]
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