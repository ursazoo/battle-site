<template>
  <div>
    <div class="title">post</div>
    <NuxtLink to="/">index</NuxtLink>
    <el-button @click="ElMessage('hello')">button</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

import { useGlobalStore } from '@/stores/global';
const globalStore = useGlobalStore();

definePageMeta({
  layout: 'default', // 值为字符串时，是layouts/下对应的文件；值为false时，当前路由不使用layout
});

useServerSeoMeta({
  title: '网站标题',
  ogTitle: '网站标题',
  description: '这是我的神奇网站，让我告诉您所有相关信息。',
  ogDescription: '这是我的神奇网站，让我告诉您所有相关信息。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

// const title = ref('网站标题1111');

// useSeoMeta({
//   title,
//   description: () => `description: ${title.value}`,
// });

// seo配置只取一个即可，后面的会覆盖前面的

console.log(globalStore.count);
</script>

<style scoped lang="scss">
.title {
  color: $primary;
  font-size: 10px;
}
</style>
