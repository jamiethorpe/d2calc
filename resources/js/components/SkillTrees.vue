<template>
    <div class="columns is-marginless">
        <div v-show="tree.isActive" v-for="(tree, index) in trees" :key="index" class="tree column is-6 is-offset-3">
            <div class="columns is-marginless is-multiline is-centered is-mobile">
                <div v-for="(skill, index) in tree.skills" :key="index" class="column is-4">
                    <div 
                        @click.self="increaseSkill(skill, tree)" 
                        @contextmenu.self.prevent="decreaseSkill(skill)" 
                        :class="[
                            {[className] : !skill.isPlaceholder}, 
                            toKebabCase(skill.name),
                            {'available' : skill.available},
                            {'unavailable' : !skill.available},
                        ]" 
                        class="skill"
                        :ref="skill.name"
                    >
                        <div 
                            v-if="!skill.isPlaceholder" 
                            @click="resetSkill(skill)" 
                            :class="[{
                                'hide' : skill.points <= 0, 
                                'visible' : skill.points > 0, 
                            }]" 
                            class="skill-reset"
                        >
                            Reset
                        </div>
                        <div v-if="!skill.isPlaceholder" class="skill-counter" :class="{'plus-skills' : plusAllSkillsTotal > 0}">{{ skill.points + plusAllSkillsTotal }}</div>
                    </div>
                    <svg><line class="skill-path" ref="{{ skill.name+'Line' }}"/></svg>
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
        increaseSkill(skill, tree) {
            if (!skill.isPlaceholder && skill.available) {
                skill.points += 1;
                this.$parent.pointsSpent += 1;
                this.checkForUnlockedSkills(skill, tree);
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
        checkForUnlockedSkills(skill, tree) {
            var possibleUnlocks = tree.skills.filter(possibleUnlock => {
                return possibleUnlock.prerequisites.includes(skill.name);
            });

            possibleUnlocks.forEach(possibleUnlock => {
                var total = 0;
                possibleUnlock.prerequisites.forEach(prereq => {
                    tree.skills.forEach(s => {
                        if(s.name === prereq && s.points >= 1) {
                            total += 1;
                        }
                    });
                });
                if (total >= possibleUnlock.prerequisites.length) {
                    possibleUnlock.available = true;
                }
            });
        },
        getSkillPosition(skill) {
            const left = this.$refs[skill.name][0].getBoundingClientRect().left;
            const top = this.$refs[skill.name][0].getBoundingClientRect().top;
            console.log(skill, left, top);
        },
        positionSkillPaths() {
            this.trees.forEach(tree => {
                tree.skills.forEach(skill => {
                    this.getSkillPosition(skill);
                });
            });
        }
    },
    mounted() {
        this.positionSkillPaths();
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
        min-height: 545px;
    }

    .skill-reset {
        background-color:rgb(186,39,16);
        background-color:rgba(186,39,16, 0.3);
        text-align: center;
        display: inline-block;
        color: #beb8a2;
        position: relative;
        /* top: calc((70vh/6) - 2rem); */
        top: 3.5rem;
        width: 88%;
        font-family: 'Diablo Heavy', serif;
    }

    .skill-counter {
        background-color: #000;
        text-align: center;
        display: inline-block;
        color: #beb8a2;
        position: relative;
        top: 2rem;
        left: 3.5rem;
        width: 1.5rem;
        /* top: calc((70vh/6) - 3.5rem); */
    }

    .skill {
        background-color: #614b34;
        -webkit-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        box-shadow: inset 6px -6px 29px 1px rgba(0,0,0,0.75);
        width: 4rem;
        height: 4rem;
        /* width: calc((73vh/6) - 1.5rem);
        height: calc((73vh/6) - 1.5rem); */
        margin: 0 auto;
        user-select: none;
    }

    .skill.available {
        opacity: 1;
    }

    .skill.unavailable {
        opacity: .3;
    }

    .skill.placeholder {
        opacity: 0;
    }

    .skill-path {
        display: inline-block;
        position: absolute;
    }
</style>
