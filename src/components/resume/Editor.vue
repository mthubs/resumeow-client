<script setup>
import Title from './Title.vue';

const titleInputHandler = (value) => {
    console.log(`New title is: ${value}`)
}
</script>

<template>
    <div class="h-full max-w-4xl mx-auto p-14">
        <Title @input="titleInputHandler" />
    </div>
</template>

<style scoped>
</style>
