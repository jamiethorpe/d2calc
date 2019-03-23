<template>
    <svg v-show="x2+y1+y2 > 0" :id="prereq + '-to-' + skill.name" :style="boxStyle" xmlns="http://www.w3.org/2000/svg" class="skill-path">
        <line x1="0" :y1="y1" :x2="x2" :y2="y2"/>
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
                    left: 'calc(' + this.skillStats.left + 'px + 1.75rem)',
                    top: 'calc(' + this.preStats.top + 'px - 1rem)',
                }  
            } else if (this.goesDownStraight) {
                return {
                    left: 'calc(' + this.preStats.left + 'px + 2rem)',
                    top: 'calc(' + this.preStats.top + 'px + 0.5rem)',
                    height: this.y2,
                }
            } else {
                return {
                    left: 'calc(' + this.preStats.left + 'px + 2rem)',
                    top: 'calc(' + this.preStats.top + 'px - 0.5rem)',
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
        //Might use this later once I figure out what's up with the stroke width
        // lineStyle() {
        //     if (this.goesDownStraight) {
        //         return {strokeWidth: '12px'};
        //     }else{
        //         return {strokeWidth: '6px'};
        //     }
        // }
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
    },
    updated() {
        // this.$nextTick(function () {
            this.determineDirection();
        // });
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
}

.skill-path line {
    stroke: #6b6b6b;
    z-index: 2;
    stroke-width: 6px;
}

</style>
