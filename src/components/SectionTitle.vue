<script setup>
import { ref } from "vue";
import { resetInputValueToDefault } from "@/mixins/events";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  initialValue: String,
});
const title = ref(props.initialValue);
const input = ref("input");

library.add(faPencil);
</script>

<template>
  <div
    class="
      text-xl text-gray-800
      my-4
      py-0
      px-8
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
        focus-within:border-b-gray-400
        font-semibold
      "
      @focusout="(e) => resetInputValueToDefault(e, 'Personal Details')"
      :size="title.length"
      ref="input"
      v-model="title"
    />
    <div @click="input.select">
      <FontAwesomeIcon
        icon="pencil"
        class="cursor-pointer text-slate-800 hover:text-blue-600"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
