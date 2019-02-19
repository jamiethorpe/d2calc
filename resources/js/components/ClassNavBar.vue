<template>
    <div class="columns is-centered is-mobile has-text-centered toolbar">
        <div class="column text-only">Spent: {{ pointsSpent }}</div>
        <div class="column">
            <button class="class-nav-button plus-all-skills">+ All Skills: {{ plusAllSkills }}</button>
        </div>
        <div class="column">
            <button class="class-nav-button save">Save</button>
        </div>
        <div class="column">
            <button @click="$emit('resetAll')" class="class-nav-button reset">Reset</button> 
        </div>
    </div>
</template>

<script>
export default {
    name:'class-nav-bar',
    props: ['pointsSpent', 'plusAllSkills'],
    data() {
        return {
            
        }
    },
    methods: {

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
