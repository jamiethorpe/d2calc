<template>
    <div class="container is-main">
        <tree-tabs :trees="trees"></tree-tabs>

        <class-nav-bar 
            @resetAll="resetAll" 
            @plusAllSkills="plusAllSkills" 
            @minusAllSkills="minusAllSkills" 
            :points-spent="pointsSpent" 
            :plus-all-skills-total="plusAllSkillsTotal"
        ></class-nav-bar>

        <skill-trees v-if="character" :trees="trees" :class-name="lowerClassName" :plus-all-skills-total="plusAllSkillsTotal"></skill-trees>
        
    </div>
</template>

<script>
import treeTabs from '../components/TreeTabs.vue';
import classNavBar from '../components/ClassNavBar.vue';
import skillTrees from '../components/SkillTrees.vue';

export default {
    components: {
        'tree-tabs':treeTabs,
        'class-nav-bar':classNavBar,
        'skill-trees':skillTrees,
    },
    name: 'Build',
    data() {
        return {
            
        }
    },
    computed: {
        character() {
            return this.$store.getters.selectedClass;
        },
        trees() {
            return this.$store.getters.trees;
        },
        lowerClassName() {
            return this.character.toLowerCase();
        },
        pointsSpent() {
            return this.$store.getters.pointsSpent;
        },
        plusAllSkillsTotal() {
            return this.$store.getters.plusAllSkillsTotal;
        } 
    },
    methods: {
        selectClass(character) {
            this.$store.commit('selectClass', character);
        },
        resetAll() {
            this.trees.forEach((tree) => {
                tree.skills.forEach((skill) => {
                    skill.points = 0;
                    if (skill.prerequisites[0] !== 'None') {
                        skill.available = false;
                    }
                });
            });
            this.$store.commit('resetAllSkills');
        },
        plusAllSkills() {
            this.$store.commit('plusAllSkills');
        },
        minusAllSkills() {
            if (this.plusAllSkillsTotal > 0) {
                this.$store.commit('minusAllSkills');
            }
        }
    },
    created() {
        if (!this.$store.getters.selectedClass) {
            this.selectClass(this.$route.name);
        }
    }
} 
</script>

<style>
    
</style>