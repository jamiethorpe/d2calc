<template>
    <div class="container">
        <div class="tabs tree-tabs is-centered">
            <ul>
                <li @click="setTab(tree)" :class="{'is-active' : tree.isActive}" v-for="(tree, index) in trees" :key="index">
                    <a>{{ tree.name }}</a>
                </li>
            </ul>
        </div>
        <div class="columns">
            <div class="tree column is-6 is-offset-3">
                <div class="columns is-centered is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column skill">
                        <div class="placeholder">1</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">2</div>
                    </div>
                    <div class="column skill">
                        <div class="placeholder">3</div>
                    </div>
                </div>
            </div>
        </div>
        
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
                    isActive: true,
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
        toggleDropdown() {
            this.dropdownActive = !this.dropdownActive;
        },
        setTab(selectedTree){
            this.trees.forEach((tree) => {
                tree.isActive = (tree.name === selectedTree.name);
            });
        }
    },
    mounted() {
        this.selectClass();
    }
} 
</script>

<style>
    .tree {
        height: 80vh;
        width: 100%;
        background-color: #B5B1B2;
    }

    /* .skill {
        text-align:center;
    } */

    .placeholder {
        background-color: #614b34;
        -webkit-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        width: calc((80vh/6) - 1.5rem);
        height: calc((80vh/6) - 1.5rem);
        margin: 0 auto;
    }
</style>