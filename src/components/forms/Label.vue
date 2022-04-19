<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faQuestionCircle)


const props = defineProps({
  name: String,
  text: String,
  tooltip: String
});
</script>

<template>
  <div class="flex items-center">
    <label :for="props.name" class="text-slate-500 text-sm px-1 py-2">
      {{ props.text }}
    </label>
    <div
      class="
        cursor-pointer
        text-emerald-400
        hover:text-emerald-500
        ml-1
        relative
        group
      "
      v-if="props.tooltip"
    >
      <FontAwesomeIcon icon="question-circle" class="text-md flex-auto" />
      <span class="tooltip-right group-hover:scale-100" v-html="props.tooltip" />
    </div>
  </div>
</template>

<style scoped>
</style>
