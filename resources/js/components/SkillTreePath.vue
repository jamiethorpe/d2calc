<template>
    <svg :id="prereq + '-to-' + skill.name" :style="boxStyle" xmlns="http://www.w3.org/2000/svg" class="skill-path">
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
        }
    },
    computed: {
        boxStyle() {
            if (this.goesDownLeft) {
                return {
                    left: 'calc(' + this.preStats.left + 'px - 8rem)',
                    top: 'calc(' + this.preStats.top + 'px)',
                }  
            } else {
                return {
                    left: 'calc(' + this.preStats.left + 'px + 4rem)',
                    top: 'calc(' + this.preStats.top + 'px + 0.75rem)',
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
            
        }
    },
    mounted() {
        if ((this.skillStats.left - this.preStats.left) < 0) {
            this.goesDownLeft = true;
        }
        console.log(this.prereq + ' to ' + this.skill.name, (this.skillStats.top - this.preStats.top));
    }
}
</script>

<style>

.skill-path {
    display: inline-block;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    /* left: 333.656px;
    top: 148px; */
    width: 190px;
}

.skill-path line {
    stroke: pink;
    stroke-width: 6px;
    z-index: 2;
}

</style>
