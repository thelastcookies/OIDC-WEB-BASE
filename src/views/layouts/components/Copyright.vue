<script setup lang="ts">
const year = new Date().getFullYear();
const author = import.meta.env.APP_AUTHOR;
const version = __APP_VERSION__;
</script>

<template>
  <div class="absolute bottom-0 w-full p-2 flex flex-col gap-0.5 text-center text-10px text-gray-400">
    <div class="text-12px">v{{ version }}</div>
    <div>Copyright © {{ year }} {{ author }}.</div>
    <div>All rights reserved.</div>
  </div>
</template>
