<template>
    <svg :id="prereq + '-to-' + skill.name" :style="boxStyle" xmlns="http://www.w3.org/2000/svg" class="skill-path">
        <line x1="0" :y1="y1" :x2="x2" :y2="y2" :style="lineStyle"/>
    </svg>
</template>

<script>
export default {
    name: 'skill-tree-path',
    props: ['skill', 'prereq', 'preStats', 'skillStats'],
    data() {
        return {
            goesDownLeft: false,
            goesDownRight: false,
            goesDownStraight: false,
        }
    },
    computed: {
        boxStyle() {
            if (this.goesDownLeft) {
                return {
                    left: 'calc(' + this.preStats.left + 'px - 6rem)',
                    top: 'calc(' + this.preStats.top + 'px - 1rem)',
                }  
            } else if (this.goesDownStraight) {
                return {
                    left: 'calc(' + this.preStats.left + 'px + 2rem)',
                    top: 'calc(' + this.preStats.top + 'px + 0.75rem)',
                }
            } else {
                return {
                    left: 'calc(' + this.preStats.left + 'px + 2rem)',
                    top: 'calc(' + this.preStats.top + 'px - 0.75rem)',
                }
            }
            
        },
        y1() {
            if (this.goesDownLeft) {
               return (this.skillStats.top - this.preStats.top); 
            }else{
                return 0;
            }
        },
        x2() {
            if (!this.goesDownLeft) {
                return (this.skillStats.left - this.preStats.left);
            } else {
                return Math.abs(this.skillStats.left - this.preStats.left);
            }
            
        },
        y2() {
            if (!this.goesDownLeft) {
                return (this.skillStats.top - this.preStats.top);
            } else {
                return 0;
            }
            
        },
        lineStyle() {
            if (this.goesDownStraight) {
                return {strokeWidth: '12px'};
            }else{
                return {strokeWidth: '6px'};
            }
        }
    },
    methods: {
        determineDirection() {
            if ((this.skillStats.left - this.preStats.left) < 0) {
                this.goesDownLeft = true;
            } else if (this.x2 === 0) {
                this.goesDownStraight = true;
            } else {
                this.goesDownRight = true;
            }
        }
    },
    mounted() {
        this.determineDirection();
        console.log(this.prereq + ' to ' + this.skill.name, (this.skillStats.top - this.preStats.top));
    }
}
</script>

<style>

.skill-path {
    display: inline-block;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    /* width: 190px; */
}

.skill-path line {
    stroke: #6b6b6b;
    z-index: 2;
}

</style>
