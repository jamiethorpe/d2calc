<template>
    <div class="container">
        <div class="tabs tree-tabs is-centered">
            <ul>
                <li @click="setTab(tree)" :class="{'is-active' : tree.isActive}" v-for="(tree, index) in trees" :key="index">
                    <a>{{ tree.name }}</a>
                </li>
            </ul>
        </div>

        <div class="columns is-centered is-mobile has-text-centered toolbar">
            <div class="column text-only">Spent: {{ pointsSpent }}</div>
            <div class="column">
                <button class="class-nav-button plus-all-skills">+ All Skills: {{ plusAllSkills }}</button>
            </div>
            <div class="column">
                <button class="class-nav-button save">Save</button>
            </div>
            <div class="column">
                <button @click="resetAll" class="class-nav-button reset">Reset</button> 
            </div>
        </div>
        
        <div class="columns">
            <div class="tree column is-6 is-offset-3">
                <div class="columns is-multiline is-centered is-mobile">
                    <div v-for="(skill, index) in trees[0].skills" :key="index" class="column is-4">
                        <div @click.self="increaseSkill(skill)" @contextmenu.self.prevent="decreaseSkill(skill)" :class="[{'amazon' : !skill.isPlaceholder}, toKebabCase(skill.name)]" class="skill">
                            <div v-if="!skill.placeholder" @click="resetSkill(skill)" :class="{'hide' : skill.points <= 0}" class="skill-reset">Reset</div>
                            <div v-if="!skill.placeholder" class="skill-counter">{{ skill.points }}</div>
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
            pointsSpent: 0,
            plusAllSkills: 0,
            trees: [
                {
                    name: 'Javelin and Spear',
                    isActive: true,
                    skills: [
                        {
                            id: 1,
                            isPlaceholder: false,
                            name: 'Jab',
                            description: 'Multiple attacks within the time span of a normal attack, each jab a bit less powerful than the last up until level 6.',
                            points: 0,
                        },
                        {
                            id: 2,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 3,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 4,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Power Strike',
                            description: 'Adds lightning damage and increases normal damage to thrusting attacks.',
                            points: 0,
                        },
                        {
                            id: 6,
                            isPlaceholder: false,
                            name: 'Poison Javelin',
                            description: 'Thrown javelin causes poison damage and leaves a trail of poison clouds.',
                            points: 0,
                        },
                        {
                            position: 7,
                            isPlaceholder: false,
                            name: 'Impale',
                            description: 'A more powerful attack with an increased chance the weapon will lose durability.',
                            points: 0,
                        },
                        {
                            position: 8,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 9,
                            isPlaceholder: false,
                            name: 'Lightning Bolt',
                            description: 'Leaves a trail of lightning and does lightning damage.',
                            points: 0,
                        },
                        {
                            position: 10,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 11,
                            isPlaceholder: false,
                            name: 'Charged Strike',
                            description: 'A lightning attack that releases charged bolts.',
                            points: 0,
                        },
                        {
                            id: 12,
                            isPlaceholder: false,
                            name: 'Plague Javelin',
                            description: 'Similar to Poison Javelin with an additional cloud of expanding poison at the point of impact.',
                            points: 0,
                        },
                        {
                            id: 13,
                            isPlaceholder: false,
                            name: 'Fend',
                            description: 'Rapidly strikes several close targets.',
                            points: 0,
                        },
                        {
                            id: 14,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 15,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 16,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 17,
                            isPlaceholder: false,
                            name: 'Lightning Strike',
                            description: 'Does lightning damage and releases chain lightning from target.',
                            points: 0,
                        },
                        {
                            id: 18,
                            isPlaceholder: false,
                            name: 'Lightning Fury',
                            description: 'Creates a powerful lightning bolt that releases multiple lightning bolts from target.',
                            points: 0,
                        },
                    ]
                },
                {
                    name: 'Passive and Magic',
                    isActive: false,
                    skills: [
                        {
                            id: 1,
                            isPlaceholder: false,
                            name: 'Jab',
                            description: 'Multiple attacks within the time span of a normal attack, each jab a bit less powerful than the last up until level 6.',
                            points: 0,
                        },
                        {
                            id: 2,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 3,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 4,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Power Strike',
                            description: 'Adds lightning damage and increases normal damage to thrusting attacks.',
                            points: 0,
                        },
                        {
                            id: 6,
                            isPlaceholder: false,
                            name: 'Poison Javelin',
                            description: 'Thrown javelin causes poison damage and leaves a trail of poison clouds.',
                            points: 0,
                        },
                        {
                            position: 7,
                            isPlaceholder: false,
                            name: 'Impale',
                            description: 'A more powerful attack with an increased chance the weapon will lose durability.',
                            points: 0,
                        },
                        {
                            position: 8,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 9,
                            isPlaceholder: false,
                            name: 'Lightning Bolt',
                            description: 'Leaves a trail of lightning and does lightning damage.',
                            points: 0,
                        },
                        {
                            position: 10,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 11,
                            isPlaceholder: false,
                            name: 'Charged Strike',
                            description: 'A lightning attack that releases charged bolts.',
                            points: 0,
                        },
                        {
                            id: 12,
                            isPlaceholder: false,
                            name: 'Plague Javelin',
                            description: 'Similar to Poison Javelin with an additional cloud of expanding poison at the point of impact.',
                            points: 0,
                        },
                        {
                            id: 13,
                            isPlaceholder: false,
                            name: 'Fend',
                            description: 'Rapidly strikes several close targets.',
                            points: 0,
                        },
                        {
                            id: 14,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 15,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 16,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 17,
                            isPlaceholder: false,
                            name: 'Lightning Strike',
                            description: 'Does lightning damage and releases chain lightning from target.',
                            points: 0,
                        },
                        {
                            id: 18,
                            isPlaceholder: false,
                            name: 'Lightning Fury',
                            description: 'Creates a powerful lightning bolt that releases multiple lightning bolts from target.',
                            points: 0,
                        },
                    ]
                },
                {
                    name: 'Bow and Crossbow',
                    isActive: false,
                    skills: [
                        {
                            id: 1,
                            isPlaceholder: false,
                            name: 'Jab',
                            description: 'Multiple attacks within the time span of a normal attack, each jab a bit less powerful than the last up until level 6.',
                            points: 0,
                        },
                        {
                            id: 2,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 3,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 4,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Power Strike',
                            description: 'Adds lightning damage and increases normal damage to thrusting attacks.',
                            points: 0,
                        },
                        {
                            id: 6,
                            isPlaceholder: false,
                            name: 'Poison Javelin',
                            description: 'Thrown javelin causes poison damage and leaves a trail of poison clouds.',
                            points: 0,
                        },
                        {
                            position: 7,
                            isPlaceholder: false,
                            name: 'Impale',
                            description: 'A more powerful attack with an increased chance the weapon will lose durability.',
                            points: 0,
                        },
                        {
                            position: 8,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 9,
                            isPlaceholder: false,
                            name: 'Lightning Bolt',
                            description: 'Leaves a trail of lightning and does lightning damage.',
                            points: 0,
                        },
                        {
                            position: 10,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 11,
                            isPlaceholder: false,
                            name: 'Charged Strike',
                            description: 'A lightning attack that releases charged bolts.',
                            points: 0,
                        },
                        {
                            id: 12,
                            isPlaceholder: false,
                            name: 'Plague Javelin',
                            description: 'Similar to Poison Javelin with an additional cloud of expanding poison at the point of impact.',
                            points: 0,
                        },
                        {
                            id: 13,
                            isPlaceholder: false,
                            name: 'Fend',
                            description: 'Rapidly strikes several close targets.',
                            points: 0,
                        },
                        {
                            id: 14,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 15,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 16,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                        },
                        {
                            id: 17,
                            isPlaceholder: false,
                            name: 'Lightning Strike',
                            description: 'Does lightning damage and releases chain lightning from target.',
                            points: 0,
                        },
                        {
                            id: 18,
                            isPlaceholder: false,
                            name: 'Lightning Fury',
                            description: 'Creates a powerful lightning bolt that releases multiple lightning bolts from target.',
                            points: 0,
                        },
                    ]
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
        setTab(selectedTree) {
            this.trees.forEach((tree) => {
                tree.isActive = (tree.name === selectedTree.name);
            });
        },
        increaseSkill(skill) {
            skill.points += 1;
            this.pointsSpent += 1;
        },
        decreaseSkill(skill) {
            if (skill.points > 0) {
                skill.points -= 1;
                this.pointsSpent -= 1;
            }
        },
        resetSkill(skill) {
            this.pointsSpent = (this.pointsSpent - skill.points);
            skill.points = 0;
        },
        resetAll() {
            this.trees.forEach((tree) => {
                tree.skills.forEach((skill) => {
                    skill.points = 0;
                });
            });
            this.pointsSpent = 0;
        }
    },
    mounted() {
        this.selectClass();
    }
} 
</script>

<style>
    .hide {
        visibility: hidden;
    }

    .tree {
        height: 75vh;
        width: 100%;
        background-color: #333333;
        border: 3px solid #beb8a2;
        padding-top: .25rem;
    }

    .tabs:not(:last-child) {
        margin-bottom: 0.75rem;
    }

    .skill-reset {
        background-color:rgb(186,39,16, 0.3);
        text-align: center;
        display: inline-block;
        color: #beb8a2;
        position: relative;
        top: 3.75rem;
        width: 88%;
        font-family: 'Diablo Heavy', serif;
    }

    .skill-counter {
        background-color: #000;
        text-align: center;
        display: inline-block;
        color: #beb8a2;
        position: relative;
        left: 3.75rem;
        width: 1.5rem;
        top: 2.25rem;
    }

    .skill {
        background-color: #614b34;
        -webkit-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        width: calc((73vh/6) - 1.5rem);
        height: calc((73vh/6) - 1.5rem);
        margin: 0 auto;
        user-select: none;
    }

    .skill.placeholder {
        opacity: 0;
    }

    .skill.amazon {
        background-image: url("/img/amazon_skills.png");
        background-size: 1000%;
        display:block;
    }

    .toolbar {
        color: #beb8a2;
    }

    .toolbar .column {
        padding: 0;
    }

    .toolbar .column.text-only{
        padding: 0.75rem 0;
    }

    .class-nav-button {
        width:100%;
        height:100%;
        font-family: 'Diablo Heavy', serif;
        color: #beb8a2;
        border:none;
        font-size:1rem;
        padding: 0.75rem 0;
    }

    .class-nav-button.reset {
        background-color:#BA2710;
    }

    .class-nav-button.save {
        background-color: #084C61;
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