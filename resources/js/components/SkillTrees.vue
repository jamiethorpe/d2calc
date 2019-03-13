<template>
    <div class="columns is-marginless">
        <div v-show="tree.isActive" v-for="(tree, index) in trees" :key="index" class="tree column is-6 is-offset-3">
            <skill-tree-path 
                v-for="(line, index) in lines" 
                :key="index"
                :prereq="line.prereq"
                :skill="line.skill"
                :pre-stats="line.preStats" 
                :skill-stats="line.skillStats"
            >
            </skill-tree-path>
            <div class="columns is-marginless is-multiline is-centered is-mobile">
                <div v-for="(skill, index) in tree.skills" :key="index" class="column is-4">
                    <div 
                        @click.self="increaseSkill(skill, tree)" 
                        @contextmenu.self.prevent="decreaseSkill(skill, tree)" 
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
                            @click="resetSkill(skill, tree)" 
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
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import skillTreePath from './SkillTreePath.vue';
import Vue from 'vue';

export default {
    name:'skill-trees',
    props: ['trees', 'className', 'plusAllSkillsTotal'],
    components: {
        skillTreePath,
    },
    data() {
        return {
            lines: [],
        }
    },
    watch: {
        trees: {
            handler: function (after, before) {
                // Changes to isActive are not being detected.
                this.positionSkillPaths();
            },
            deep: true,
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
        decreaseSkill(skill, tree) {
            if (skill.points > 0 && !skill.isPlaceholder) {
                skill.points -= 1;
                this.$parent.pointsSpent -= 1;
                if (skill.points <= 0) {
                    this.checkForLockedSkills(skill, tree);
                }
            }
        },
        resetSkill(skill, tree) {
            this.$parent.pointsSpent = (this.$parent.pointsSpent - skill.points);
            skill.points = 0;
            this.checkForLockedSkills(skill, tree);
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
        checkForLockedSkills(skill, tree) {
            var locks = tree.skills.filter(lock => {
                return lock.prerequisites.includes(skill.name);
            });

            locks.forEach(lock => {
                this.$parent.pointsSpent -= lock.points;
                lock.points = 0;
                lock.available = false;
            });
        },
        getSkillPosition(skillName) {
            var stats = this.$refs[skillName][0].getBoundingClientRect();
            // console.log(skillName, stats);
            return stats;
        },
        positionSkillPaths() {
            this.lines = [];
            this.trees.forEach(tree => {
                if (tree.isActive) {
                    tree.skills.forEach(skill => {
                        skill.unlockedBy.forEach(prereq => {
                            // var prereqName =  skill.unlockedBy[skill.prerequisites.length - 1];
                            if (prereq !== 'None' && skill.name !== 'Placeholder') {

                                var preStats = this.getSkillPosition(prereq);
                                var skillStats = this.getSkillPosition(skill.name);

                                //If a skill has multiple pre-requisites, no lines are being drawn.
                                //Charged Strike is a good example.
                                //Possibly add unlockedBy[] to each skill to determine which skills to
                                //draw a path from.
                                // console.log(
                                //     'From: ' + prereq,
                                //     'To: ' + skill.name,
                                // );
                                var lineData = { 
                                    skill: skill,
                                    prereq: prereq,
                                    preStats: preStats,
                                    skillStats: skillStats,
                                };

                                this.lines.push(lineData);
                            }
                        })

                        
                    });
                }
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
        z-index: 1;
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
        z-index: 4;
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
        z-index: 4;
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
        z-index: 3;
    }

    .skill.available {
        filter:grayscale(0%);
    }

    .skill.unavailable {
        filter:grayscale(100%);
    }

    .skill.placeholder {
        opacity: 0;
    }
</style>
