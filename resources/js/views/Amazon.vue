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
                    <div class="column">
                        <div class="skill jab">
                            <div class="skill-counter">{{ trees[0].skills.jab.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder">2</div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill placeholder">1</div>
                    </div>
                    <div class="column">
                        <div class="skill power-strike">
                            <div class="skill-counter">{{ trees[0].skills.powerStrike.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill">
                            {{ trees[0].skills.poisonJavelin.name }}
                            <div class="skill-counter">{{ trees[0].skills.poisonJavelin.points }}</div>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill">1</div>
                    </div>
                    <div class="column">
                        <div class="skill">2</div>
                    </div>
                    <div class="column">
                        <div class="skill">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill">1</div>
                    </div>
                    <div class="column">
                        <div class="skill">2</div>
                    </div>
                    <div class="column">
                        <div class="skill">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill">1</div>
                    </div>
                    <div class="column">
                        <div class="skill">2</div>
                    </div>
                    <div class="column">
                        <div class="skill">3</div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill">1</div>
                    </div>
                    <div class="column">
                        <div class="skill">2</div>
                    </div>
                    <div class="column">
                        <div class="skill">3</div>
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
                    skills: {
                        //Probably need to add rows, row position, isPlaceholder (for blank skills)
                        jab: {
                            name: 'Jab',
                            description: 'Multiple attacks within the time span of a normal attack, each jab a bit less powerful than the last up until level 6.',
                            points: 0,
                        },
                        powerStrike: {
                            name: 'Power Strike',
                            description: 'Adds lightning damage and increases normal damage to thrusting attacks.',
                            points: 0,
                        },
                        poisonJavelin: {
                            name: 'Poison Javelin',
                            description: 'Thrown javelin causes poison damage and leaves a trail of poison clouds.',
                            points: 0,
                        }
                    }
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


    .skill {
        background-color: #614b34;
        -webkit-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        width: calc((80vh/6) - 1.5rem);
        height: calc((80vh/6) - 1.5rem);
        margin: 0 auto;
    }

    .skill.placeholder {
        opacity: 0;
    }

    .skill-counter {
        background-color: #000;
        height: 1rem;
        width: 1rem;
        /* margin-top: 3rem;
        margin-left: 4.25rem; */
    }

    /* .jab {
        background-image: url(/img/amazon_skills.png);
        background-position: 0 0;
        width: 48px;
        height: 48px;
    } */

    .jab {
        width: calc((80vh/6) - 1.5rem);
        height: calc((80vh/6) - 1.5rem);
        background-image: url("/img/amazon_skills.png");
        background-position: 0 0;
        background-size: 1000%;
        display:block;
    }

    .power-strike {
        width: calc((80vh/6) - 1.5rem);
        height: calc((80vh/6) - 1.5rem);
        background-image: url("/img/amazon_skills.png");
        background-position: 11.1111% 0;
        background-size: 1000%;
        display:block;
    }
</style>