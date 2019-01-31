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
            <div class="column is-centered is-mobile is-6 is-offset-3">
                <div class="columns">
                <div class="column">Spent: 0</div>
                <div class="column">+ All Skills: 0</div>
                <div class="column">Save</div>
                <div class="column">Reset</div>
            </div>
            </div>
        </div>
        
        <div class="columns">
            <div class="tree column is-6 is-offset-3">
                <div class="columns is-centered is-mobile skill-row">
                    <div class="column">
                        <div class="skill amazon jab">
                            <div class="skill-counter">{{ trees[0].skills.jab.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill amazon power-strike">
                            <div class="skill-counter">{{ trees[0].skills.powerStrike.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill amazon poison-javelin">
                            <div class="skill-counter">{{ trees[0].skills.poisonJavelin.points }}</div>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill amazon impale">
                            <div class="skill-counter">{{ trees[0].skills.impale.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill amazon lightning-bolt">
                            <div class="skill-counter">{{ trees[0].skills.lightningBolt.points }}</div>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill amazon charged-strike">
                            <div class="skill-counter">{{ trees[0].skills.chargedStrike.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill amazon plague-javelin">
                            <div class="skill-counter">{{ trees[0].skills.plagueJavelin.points }}</div>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill amazon fend">
                            <div class="skill-counter">{{ trees[0].skills.fend.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                </div>
                <div class="columns is-mobile skill-row">
                    <div class="column">
                        <div class="skill placeholder"></div>
                    </div>
                    <div class="column">
                        <div class="skill amazon lightning-strike">
                            <div class="skill-counter">{{ trees[0].skills.lightningStrike.points }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="skill amazon lightning-fury">
                            <div class="skill-counter">{{ trees[0].skills.lightningFury.points }}</div>
                        </div>
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
                        },
                        impale: {
                            name: 'Impale',
                            description: 'A more powerful attack with an increased chance the weapon will lose durability.',
                            points: 0,
                        },
                        lightningBolt: {
                            name: 'Lightning Bolt',
                            description: 'Leaves a trail of lightning and does lightning damage.',
                            points: 0,
                        },
                        chargedStrike: {
                            name: 'Charged Strike',
                            description: 'A lightning attack that releases charged bolts.',
                            points: 0,
                        },
                        plagueJavelin: {
                            name: 'Plague Javelin',
                            description: 'Similar to Poison Javelin with an additional cloud of expanding poison at the point of impact.',
                            points: 0,
                        },
                        fend: {
                            name: 'Fend',
                            description: 'Rapidly strikes several close targets.',
                            points: 0,
                        },
                        lightningStrike: {
                            name: 'Lightning Strike',
                            description: 'Does lightning damage and releases chain lightning from target.',
                            points: 0,
                        },
                        lightningFury: {
                            name: 'Lightning Fury',
                            description: 'Creates a powerful lightning bolt that releases multiple lightning bolts from target.',
                            points: 0,
                        },

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
        background-color: #333333;
        border: 3px solid #beb8a2;
        padding-top: .25rem;
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

    .skill.amazon {
        background-image: url("/img/amazon_skills.png");
        background-size: 1000%;
        display:block;
    }

    .skill-counter {
        background-color: #000;
        height: 1.5rem;
        width: 1.5rem;
        text-align: center;
        margin-top: 4.25rem;
        margin-left: 4.25rem;
        display: inline-block;
        color: #beb8a2;
    }

    .amazon.jab {
        background-position: 0 0;
    }
    .amazon.power-strike {
        background-position: 11.1111% 0;
    }
    .amazon.poison-javelin {
        background-position: 22.2222% 0;
    }
    .amazon.impale {
        background-position: 33.3333% 0;
    }
    .amazon.lightning-bolt {
        background-position: 44.4444% 0;
    }
    .amazon.charged-strike {
        background-position: 55.5555% 0;
    }
    .amazon.plague-javelin {
        background-position: 66.6666% 0;
    }
    .amazon.fend {
        background-position: 77.7777% 0;
    }
    .amazon.lightning-strike {
        background-position: 88.8888% 0;
    }
    .amazon.lightning-fury {
        background-position: 100% 0;
    }
</style>