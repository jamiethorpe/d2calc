<template>
    <div class="columns is-centered is-mobile has-text-centered toolbar">
        <div class="column is-one-fifth text-only">Spent: {{ pointsSpent }}</div>
        <div class="column is-three-fifths text-only has-vertically-centered-content">
            <button class="diablo-button" @click="$emit('minusAllSkills')">-</button>
            <button class="diablo-button" @click="$emit('plusAllSkills')">+</button>
            All: {{ plusAllSkillsTotal }}
        </div>
        <!-- <div class="column is-one-fifth">
            <button class="class-nav-button save">Save</button>
        </div> -->
        <div class="column is-one-fifth">
            <button @click="$emit('resetAll')" class="class-nav-button reset">Reset</button> 
        </div>
    </div>
</template>

<script>
export default {
    name:'class-nav-bar',
    props: ['pointsSpent', 'plusAllSkillsTotal'],
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .diablo-button {
        font-family: 'Diablo Heavy', serif;
        background-color:#BA2710;
        border: 1px solid #beb8a2;
        color: #FFFFFF;
        -webkit-box-shadow: inset 3px -3px 17px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 3px -3px 17px 0px rgba(0,0,0,0.75);
        box-shadow: inset 3px -3px 17px 0px rgba(0,0,0,0.75);
        text-align: center;
        margin-right: 0.25rem;
        font-size: 1.2rem;
        height: 1.7rem;
        width: 1.7rem;
        padding: 0;
        border-radius: 0;
    }

    .diablo-button:hover {
        cursor: pointer;
    }

    .toolbar {
        color: #beb8a2;
        white-space: nowrap;
        overflow: hidden;
        margin: -0.75rem 0 0 0;
    }

    .toolbar .column {
        padding: 0;
    }

    .toolbar .column.text-only{
        padding: 0.45rem 0;
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
