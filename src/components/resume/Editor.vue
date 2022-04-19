<script setup>
import Title from '@/components/resume/Title.vue';
import PersonalDetails from '@/components/resume/PersonalDetails.vue';

const titleInputHandler = (value) => {
    console.log(`New title is: ${value}`)
}
</script>

<template>
    <div class="h-full overflow-y-auto max-w-4xl mx-auto p-14">
        <Title @input="titleInputHandler" />
        <PersonalDetails />
    </div>
</template>

<style scoped>
</style>
