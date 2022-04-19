<script setup>
import Title from '@/components/resume/Title.vue';
import Section from '@/components/resume/Section.vue';

const titleInputHandler = (value) => {
    console.log(`New title is: ${value}`)
}
</script>

<template>
    <div class="h-full max-w-4xl mx-auto p-14">
        <Title @input="titleInputHandler" />
        <Section />
    </div>
</template>

<style scoped>
</style>
