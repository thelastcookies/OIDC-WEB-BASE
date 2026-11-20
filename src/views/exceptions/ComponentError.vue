<script setup lang="ts">
import notFoundImg from '~/exceptions/404.png';
</script>

<template>
  <a-result title="NOT FOUND" sub-title="页面不存在，请检查菜单配置" class="px-0!">
    <template #icon>
      <img width="300" height="168" :src="notFoundImg" alt="404.png">
    </template>
  </a-result>
</template>
