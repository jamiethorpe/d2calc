<template>
    <div class="columns">
        <div v-show="tree.isActive" v-for="(tree, index) in trees" :key="index" class="tree column is-6 is-offset-3">
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(skill, index) in tree.skills" :key="index" class="column is-4">
                    <div @click.self="increaseSkill(skill)" @contextmenu.self.prevent="decreaseSkill(skill)" :class="[{'amazon' : !skill.isPlaceholder}, toKebabCase(skill.name)]" class="skill">
                        <div v-if="!skill.placeholder" @click="resetSkill(skill)" :class="[{'hide' : skill.points <= 0, 'visible' : skill.points > 0}]" class="skill-reset">Reset</div>
                        <div v-if="!skill.placeholder" class="skill-counter">{{ skill.points }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'skill-trees',
    props: ['trees'],
    data() {
        return {
            
        }
    },
    methods: {
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
    }
}
</script>

<style scoped>
    .toolbar {
        color: #beb8a2;
        white-space: nowrap;
        overflow: hidden;
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

    .class-nav-button:hover {
        cursor: pointer;
    }

    .class-nav-button.reset {
        background-color:#BA2710;
    }

    .class-nav-button.save {
        background-color: #084C61;
    }
</style>
