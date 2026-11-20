<script setup lang="ts">
import notFoundImg from '~/exceptions/404.png';
</script>

<template>
  <a-result title="NOT FOUND" sub-title="页面不存在，请检查菜单配置">
    <template #icon>
      <img :src="notFoundImg" alt="404.png">
    </template>
  </a-result>
</template>
