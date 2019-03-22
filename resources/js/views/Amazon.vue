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

        <skill-trees :trees="trees" :class-name="lowerClassName" :plus-all-skills-total="plusAllSkillsTotal"></skill-trees>
        
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
    name: 'Amazon',
    data() {
        return {
            class: 'Amazon',
            pointsSpent: 0,
            plusAllSkillsTotal: 0,
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
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 2,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 3,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 4,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Power Strike',
                            description: 'Adds lightning damage and increases normal damage to thrusting attacks.',
                            points: 0,
                            prerequisites: ['Jab'],
                            unlockedBy: ['Jab'],
                            available: false,
                        },
                        {
                            id: 6,
                            isPlaceholder: false,
                            name: 'Poison Javelin',
                            description: 'Thrown javelin causes poison damage and leaves a trail of poison clouds.',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 7,
                            isPlaceholder: false,
                            name: 'Impale',
                            description: 'A more powerful attack with an increased chance the weapon will lose durability.',
                            points: 0,
                            prerequisites: ['Jab'],
                            unlockedBy: ['Jab'],
                            available: false,
                        },
                        {
                            id: 8,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 9,
                            isPlaceholder: false,
                            name: 'Lightning Bolt',
                            description: 'Leaves a trail of lightning and does lightning damage.',
                            points: 0,
                            prerequisites: ['Poison Javelin'],
                            unlockedBy: ['Poison Javelin'],
                            available: false,
                        },
                        {
                            id: 10,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 11,
                            isPlaceholder: false,
                            name: 'Charged Strike',
                            description: 'A lightning attack that releases charged bolts.',
                            points: 0,
                            prerequisites: ['Jab', 'Poison Javelin', 'Power Strike' ,'Lightning Bolt'],
                            unlockedBy: ['Power Strike' ,'Lightning Bolt'],
                            available: false,
                        },
                        {
                            id: 12,
                            isPlaceholder: false,
                            name: 'Plague Javelin',
                            description: 'Similar to Poison Javelin with an additional cloud of expanding poison at the point of impact.',
                            points: 0,
                            prerequisites: ['Poison Javelin', 'Lightning Bolt'],
                            unlockedBy: ['Lightning Bolt'],
                            available: false,
                        },
                        {
                            id: 13,
                            isPlaceholder: false,
                            name: 'Fend',
                            description: 'Rapidly strikes several close targets.',
                            points: 0,
                            prerequisites: ['Jab', 'Impale'],
                            unlockedBy: ['Impale'],
                            available: false,
                        },
                        {
                            id: 14,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 15,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 16,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 17,
                            isPlaceholder: false,
                            name: 'Lightning Strike',
                            description: 'Does lightning damage and releases chain lightning from target.',
                            points: 0,
                            prerequisites: ['Jab', 'Poison Javelin', 'Power Strike', 'Lightning Bolt', 'Charged Strike'],
                            unlockedBy: ['Charged Strike'],
                            available: false,
                        },
                        {
                            id: 18,
                            isPlaceholder: false,
                            name: 'Lightning Fury',
                            description: 'Creates a powerful lightning bolt that releases multiple lightning bolts from target.',
                            points: 0,
                            prerequisites: ['Poison Javelin', 'Lightning Bolt', 'Plague Javelin'],
                            unlockedBy: ['Plague Javelin'],
                            available: false,
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
                            name: 'Inner Sight',
                            description: 'Illuminates monsters and decreases their ability to defend themselves.',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 2,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 3,
                            isPlaceholder: false,
                            name: 'Critical Strike',
                            description: 'Grants a chance to do double physical damage with your attacks.',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 4,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Dodge',
                            description: 'Grants a chance to move out of the way of a melee attack while standing still.',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 6,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 7,
                            isPlaceholder: false,
                            name: 'Slow Missiles',
                            description: 'Slows down all missile and spell projectiles cast by enemies.',
                            points: 0,
                            prerequisites: ['Inner Sight'],
                            unlockedBy: ['Inner Sight'],
                            available: false,
                        },
                        {
                            id: 8,
                            isPlaceholder: false,
                            name: 'Avoid',
                            description: 'Grants a chance to move out of the way of a missile attack while standing still.',
                            points: 0,
                            prerequisites: ['Dodge'],
                            unlockedBy: ['Dodge'],
                            available: false,
                        },
                        {
                            id: 9,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 10,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 11,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 12,
                            isPlaceholder: false,
                            name: 'Penetrate',
                            description: 'Additional chance to hit.',
                            points: 0,
                            prerequisites: ['Critical Strike'],
                            unlockedBy: ['Critical Strike'],
                            available: false,
                        },
                        {
                            id: 13,
                            isPlaceholder: false,
                            name: 'Decoy',
                            description: 'Creates a duplicate image to distract enemies.',
                            points: 0,
                            prerequisites: ['Inner Sight', 'Slow Missiles'],
                            unlockedBy: ['Slow Missiles'],
                            available: false,
                        },
                        {
                            id: 14,
                            isPlaceholder: false,
                            name: 'Evade',
                            description: 'Grants a chance to escape any attack while moving.',
                            points: 0,
                            prerequisites: ['Dodge', 'Avoid'],
                            unlockedBy: ['Avoid'],
                            available: false,
                        },
                        {
                            id: 15,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 16,
                            isPlaceholder: false,
                            name: 'Valkyrie',
                            description: 'Summons a powerful Valkyrie warrior to fight by your side.',
                            points: 0,
                            prerequisites: ['Inner Sight', 'Dodge', 'Slow Missiles', 'Avoid', 'Decoy', 'Evade'],
                            unlockedBy: ['Decoy', 'Evade'],
                            available: false,
                        },
                        {
                            id: 17,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            unlockedBy: ['None'],
                            available: true,
                        },
                        {
                            id: 18,
                            isPlaceholder: false,
                            name: 'Pierce',
                            description: 'A chance that your missile will continue through its victim.',
                            points: 0,
                            prerequisites: ['Critical Strike', 'Penetrate'],
                            unlockedBy: ['Penetrate'],
                            available: false,
                        },
                    ]
                },
                {
                    name: 'Bow and Crossbow',
                    isActive: false,
                    skills: [
                        {
                            id: 1,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 2,
                            isPlaceholder: false,
                            name: 'Magic Arrow',
                            description: 'Creates an arrow composed entirely from Mana. Damage starts at the same level as a normal arrow and increases with higher levels of training.',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 3,
                            isPlaceholder: false,
                            name: 'Fire Arrow',
                            description: 'Enchants an arrow with the additional damage of fire.',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 4,
                            isPlaceholder: false,
                            name: 'Cold Arrow',
                            description: 'Enchants an arrow, adding cold damage and slowing your enemy.',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 5,
                            isPlaceholder: false,
                            name: 'Multiple Shot',
                            description: 'Splits one arrow into several. Only 3/4 of the Damage is taken from your weapon.',
                            points: 0,
                            prerequisites: ['Magic Arrow'],
                            available: false,
                        },
                        {
                            id: 6,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 7,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 8,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 9,
                            isPlaceholder: false,
                            name: 'Exploding Arrow',
                            description: 'Adds fire damage to normal arrows and explodes on impact.',
                            points: 0,
                            prerequisites: ['Magic Arrow', 'Fire Arrow', 'Multiple Shot'],
                            available: false,
                        },
                        {
                            id: 10,
                            isPlaceholder: false,
                            name: 'Ice Arrow',
                            description: 'Arrows have additional cold damage and momentarily freeze the target.',
                            points: 0,
                            prerequisites: ['Cold Arrow'],
                            available: false,
                        },
                        {
                            id: 11,
                            isPlaceholder: false,
                            name: 'Guided Arrow',
                            description: 'Imbues an arrow with the ability to seek its nearest target.',
                            points: 0,
                            prerequisites: ['Magic Arrow', 'Cold Arrow', 'Multiple Shot'],
                            available: false,
                        },
                        {
                            id: 12,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 13,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 14,
                            isPlaceholder: false,
                            name: 'Strafe',
                            description: 'Fires a volley of arrows at multiple nearby targets.',
                            points: 0,
                            prerequisites: ['Magic Arrow', 'Multiple Shot', 'Cold Arrow', 'Guided Arrow'],
                            available: false,
                        },
                        {
                            id: 15,
                            isPlaceholder: false,
                            name: 'Immolation Arrow',
                            description: 'Enchants an arrow that does fire damage, and explodes into a patch of fire on the ground. Creatures passing through the flames take additional damage.',
                            points: 0,
                            prerequisites: ['Magic Arrow', 'Fire Arrow', 'Multiple Shot', 'Exploding Arrow'],
                            available: false,
                        },
                        {
                            id: 16,
                            isPlaceholder: false,
                            name: 'Freezing Arrow',
                            description: 'Enchants an arrow to deliver cold damage that freezes any monsters near the point of impact.',
                            points: 0,
                            prerequisites: ['Cold Arrow', 'Ice Arrow'],
                            available: false,
                        },
                        {
                            id: 17,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                        {
                            id: 18,
                            isPlaceholder: true,
                            name: 'Placeholder',
                            description: 'Placeholder',
                            points: 0,
                            prerequisites: ['None'],
                            available: true,
                        },
                    ]
                },
            ],
        }
    },
    computed: {
        lowerClassName() {
            return this.class.toLowerCase();
        }
    },
    methods: {
        selectClass() {
            this.$store.commit('selectClass', this.class);
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
            this.pointsSpent = 0;
            this.plusAllSkillsTotal = 0;
        },
        plusAllSkills() {
            this.plusAllSkillsTotal += 1;
        },
        minusAllSkills() {
            if (this.plusAllSkillsTotal > 0) {
                this.plusAllSkillsTotal -= 1;
            }
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
    .visible {
        visibility: visible;
    }

    .skill.amazon {
        cursor: pointer;
    }

    .skill.amazon {
        background-image: url("/img/amazon_skills.png");
        background-size: 1000%;
        display:block;
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
    .amazon.inner-sight {
        background-position: 0 50%;
    }
    .amazon.critical-strike {
        background-position: 11.1111% 50%;
    }
    .amazon.dodge {
        background-position: 22.2222% 50%;
    }
    .amazon.slow-missiles {
        background-position: 33.3333% 50%;
    }
    .amazon.avoid {
        background-position: 44.4444% 50%;
    }
    .amazon.penetrate {
        background-position: 55.5555% 50%;
    }
    .amazon.decoy {
        background-position: 66.6666% 50%;
    }
    .amazon.evade {
        background-position: 77.7777% 50%;
    }
    .amazon.valkyrie {
        background-position: 88.8888% 50%;
    }
    .amazon.pierce {
        background-position: 100% 50%;
    }
    .amazon.magic-arrow {
        background-position: 0 100%;
    }
    .amazon.fire-arrow {
        background-position: 11.1111% 100%;
    }
    .amazon.cold-arrow {
        background-position: 22.2222% 100%;
    }
    .amazon.multiple-shot {
        background-position: 33.3333% 100%;
    }
    .amazon.exploding-arrow {
        background-position: 44.4444% 100%;
    }
    .amazon.ice-arrow {
        background-position: 55.5555% 100%;
    }
    .amazon.guided-arrow {
        background-position: 66.6666% 100%;
    }
    .amazon.strafe {
        background-position: 77.7777% 100%;
    }
    .amazon.immolation-arrow {
        background-position: 88.8888% 100%;
    }
    .amazon.freezing-arrow {
        background-position: 100% 100%;
    }
</style>