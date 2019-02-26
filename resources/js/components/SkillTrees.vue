<template>
    <div class="columns is-marginless">
        <div v-show="tree.isActive" v-for="(tree, index) in trees" :key="index" class="tree column is-6 is-offset-3">
            <div class="columns is-marginless is-multiline is-centered is-mobile">
                <div v-for="(skill, index) in tree.skills" :key="index" class="column is-4">
                    <div @click.self="increaseSkill(skill)" @contextmenu.self.prevent="decreaseSkill(skill)" :class="[{[className] : !skill.isPlaceholder}, toKebabCase(skill.name)]" class="skill">
                        <div 
                            v-if="!skill.isPlaceholder" 
                            @click="resetSkill(skill)" 
                            :class="[{'hide' : skill.points <= 0, 'visible' : skill.points > 0}]" 
                            class="skill-reset"
                        >
                            Reset
                        </div>
                        <div v-if="!skill.isPlaceholder" class="skill-counter" :class="{'plus-skills' : plusAllSkillsTotal > 0}">{{ skill.points + plusAllSkillsTotal }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'skill-trees',
    props: ['trees', 'className', 'plusAllSkillsTotal'],
    data() {
        return {
            
        }
    },
    methods: {
        increaseSkill(skill) {
            if (!skill.isPlaceholder) {
                skill.points += 1;
                this.$parent.pointsSpent += 1;
            }
        },
        decreaseSkill(skill) {
            if (skill.points > 0 && !skill.isPlaceholder) {
                skill.points -= 1;
                this.$parent.pointsSpent -= 1;
            }
        },
        resetSkill(skill) {
            this.$parent.pointsSpent = (this.$parent.pointsSpent - skill.points);
            skill.points = 0;
        },
    },
    mounted() {
        console.log(this.className);
    }
}
</script>

<style>
    .plus-skills {
        color: #6A64D5 !important;
    }

    .tree {
        height: 75vh;
        width: 100%;
        background-color: #333333;
        border: 3px solid #beb8a2;
        padding-top: .25rem;
    }

    .skill-reset {
        background-color:rgb(186,39,16);
        background-color:rgba(186,39,16, 0.3);
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
</style>
