<script setup>
import { ref } from 'vue'
const props = defineProps({
    type: { type: String, default: 'text' },
    placeholder: { type: String },
    name: { type: String },
    initialValue: { type: [String, Number] },
})
const value = ref(props.initialValue)
</script>

<template>
  <input
    class="
      bg-gray-100
      w-full
      py-3
      px-4
      text-gray-700
      focus:outline-none
      focus-within:border-b-4 focus-within:border-b-emerald-400
      text-lg
    "
    :type="props.type"
    :placeholder="props.placeholder"
    :value="value"
    :name="name"
    @input="$emit('update', name, $event.target.value)"
  />
</template>

<style scoped>
</style>
