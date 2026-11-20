<script setup lang="ts">
import networkErrorImg from '~/exceptions/500.png';

const route = useRoute();
const prevPath = route.query.redirect;
const handleRefresh = () => {
  if (prevPath) {
    router.push({
      path: decodeURIComponent(prevPath as string),
    });
  } else {
    handleBackHome();
  }
};
const handleBackHome = () => {
  router.push({
    path: '/',
  });
};

const { pause } = useIntervalFn(() => {
  handleRefresh();
}, 30000, {
  // immediate: true,
  immediateCallback: true,
});

tryOnUnmounted(() => {
  pause();
});
</script>

<template>
  <a-result title="Network Error" sub-title="网络连接失败，请稍后重试" class="px-0!">
    <template #icon>
      <img width="300" height="168" :src="networkErrorImg" alt="500.png">
    </template>
    <template #extra>
      <a-button key="refresh" type="primary" @click="handleRefresh">刷新页面</a-button>
      <a-button key="backHome" @click="handleBackHome">返回首页</a-button>
    </template>
  </a-result>
</template>
