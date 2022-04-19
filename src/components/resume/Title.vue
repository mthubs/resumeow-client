<script setup>
const focusOutHandler = (e) => {
    const text = e.target.innerText
    if(text === '') {
        e.target.innerText = 'Untitled'
    }
}

const emit = defineEmits(['input'])

const inputOutHandler = (e) => emit('input', e.target.innerText.trim())
</script>

<template>
    <div class="text-3xl text-gray-800 text-center w-full mb-1 py-0 px-8 relative">
        <div
            contenteditable
            @focusout="focusOutHandler"
            @input="inputOutHandler"
            class="my-0 mx-auto max-w-fit focus-within:outline-none
                    focus-within:border-b-2 focus-within:border-b-emerald-400"
        >Untitled Resume</div>
    </div>
</template>

<style scoped>
input {
    min-width: 32px;
}
</style>
