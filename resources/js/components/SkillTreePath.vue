<template>
    <svg :style="boxStyle" xmlns="http://www.w3.org/2000/svg" class="skill-path">
        <line x1="0" y1="0" :x2="x2" :y2="y2"/>
    </svg>
</template>

<script>
export default {
    name: 'skill-tree-path',
    props: ['skill', 'preStats', 'skillStats'],
    data() {
        return {

        }
    },
    computed: {
        boxStyle() {
            return {
                left: 'calc(' + this.preStats.left + 'px + 4rem)',
                top: 'calc(' + this.preStats.top + 'px + 0.75rem)',
            }
        },
        // boxRef() {
        //     return skill + 'Box';
        // },
        // lineRef() {
        //     return skill + 'Line';
        // },
        x2() {
            return (this.skillStats.left - this.preStats.left);
        },
        y2() {
            return (this.skillStats.top - this.preStats.top);
        }
    },
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
