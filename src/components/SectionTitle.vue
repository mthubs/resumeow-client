<script setup>
import { ref } from "vue";
import { resetInputValueToDefault } from "@/mixins/events";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencil, faUndo } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  initialValue: String,
});
const title = ref(props.initialValue);
const input = ref("input");

library.add(faPencil, faUndo);
</script>

<template>
  <div
    class="
      text-xl text-gray-800
      my-4
      py-0
      relative
      flex
      align-middle
      justify-start
    "
  >
    <input
      class="
        my-0
        max-w-fit
        focus-within:outline-none
        focus-within:border-b-2
        focus-within:border-b-emerald-400
        font-semibold
      "
      @focusout="(e) => resetInputValueToDefault(e, 'Personal Details')"
      :size="title.length > 3 ? title.length - 3 : title.length"
      ref="input"
      v-model="title"
    />
    <div
      @click="input.select"
      class="cursor-pointer text-slate-300 hover:text-emerald-500"
    >
      <FontAwesomeIcon icon="pencil" class="text-sm relative" />
    </div>
    <div
      @click="title = props.initialValue"
      class="
        cursor-pointer
        text-slate-300
        hover:text-emerald-500
        ml-2
        relative
        group
      "
      v-show="title !== props.initialValue"
    >
      <FontAwesomeIcon icon="undo" class="text-sm" />
      <span class="tooltip-right group-hover:scale-100"
        >Reset section title</span
      >
    </div>
  </div>
</template>

<style scoped>
</style>
