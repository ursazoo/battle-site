<template>
  <!-- 当视口在 xs 尺寸时隐藏 -->
  <div class="hidden-xs-only">
    <NuxtLayout v-if="game === 'ra'">
      <NuxtPage />
    </NuxtLayout>

    <NuxtLayout v-else name="custom">
      <NuxtPage />
    </NuxtLayout>
  </div>
  <!-- 当视口在 sm 及以上尺寸时隐藏 -->
  <div class="hidden-sm-and-up">
    <NuxtLayout name="mobile">
      <NuxtPage />
    </NuxtLayout>
  </div>

  <el-button @click="game = game === 'ra' ? 'cs' : 'ra'">切换</el-button>
</template>

<script lang="ts" setup>
const game = ref('ra');

const appConfig = useAppConfig();
console.log(appConfig);

const config = useRuntimeConfig();
console.log('Runtime config:', config);

if (process.server) {
  console.log('API secret:', config.apiSecret);
}
</script>

<style lang="scss">
@import 'element-plus/theme-chalk/display.css';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
