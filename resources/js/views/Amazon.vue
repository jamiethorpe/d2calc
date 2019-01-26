<template>
    <div>
        <!-- <div class="tabs tree-tabs is-centered">
            <ul>
                <li :class="{'is-active' : tree.isActive}" v-for="(tree, index) in trees" :key="index">
                    <a>{{ tree.name }}</a>
                </li>
            </ul>
        </div> -->
        <div @click="toggleDropdown" :class="{'is-active' : dropdownActive}" class="dropdown">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{{ activeTree() }}</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a v-for="(tree, index) in trees"
                        v-show="!tree.isActve"
                        :key="index" 
                        :class="{ 'is-active' : tree.isActive }" 
                        class="dropdown-item">
                            {{ tree.name }}
                    </a>
                </div>
            </div>
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
            ],
            dropdownActive: false,
        }
    },
    methods: {
        selectClass() {
            this.$store.commit('selectClass', this.class);
        },
        activeTree() {
            this.trees.forEach(tree => {
                if (tree.isActive) {
                    return tree.name;
                }
            });
        },
        toggleDropdown() {
            this.dropdownActive = !this.dropdownActive;
        }
    },
    mounted() {
        this.selectClass();
    }
} 
</script>

<style>
    
</style>