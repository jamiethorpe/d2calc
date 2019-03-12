<template>
    <div class="tabs tree-tabs is-centered">
        <ul>
            <li @click="setTab(tree,index)" :class="{'is-active' : tree.isActive}" v-for="(tree, index) in trees" :key="index">
                <a>{{ tree.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name:'tree-tabs',
    props: ['trees'],
    data() {
        return {

        }
    },
    methods: {
        setTab(selectedTree, index) {
            // this.trees.forEach((tree) => {
            //     tree.isActive = (tree.name === selectedTree.name);
            // });
            this.trees.forEach((tree) => {
                if(tree.name === selectedTree.name) {
                    Vue.set(tree, 'isActive', true);
                }else{
                    Vue.set(tree, 'isActive', false);
                }
            });
        },
    }
}
</script>

<style scoped>
    .tabs a {
        color: #5f5f5f;
    }
    .tabs.tree-tabs ul {
        border-bottom: none;
    }

    .tabs li.is-active a {
        border-bottom-color: #beb8a2;
        color: #beb8a2;
    }

    .tabs:not(:last-child) {
        margin-bottom: 0.75rem;
    }
</style>
