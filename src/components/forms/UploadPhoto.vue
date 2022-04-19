<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faUserAlt)

</script>

<template>
    <div class="flex items-center h-full group cursor-pointer">
        <div class=" h-full bg-gray-200 w-4/12 text-4xl text-slate-500 group-hover:text-emerald-500 flex items-center justify-center">
            <FontAwesomeIcon icon="user-alt" />
        </div>
        <div class="flex h-full items-center">
            <div class="text-emerald-500 group-hover:text-emerald-700 text-sm font-semibold ml-4">Upload Avatar</div>
        </div>
    </div>
</template>

<style scoped>
</style>
