import { defineStore } from 'pinia';
// 你可以为`defineStore()`的返回值命名任何你想要的名字，
// 但最好使用商店的名称并用`use`和`Store`包围它
//（例如`useUserStore`、`useCartStore`、`useProductStore` )

// 第一个参数是应用程序中商店的唯一 id
export const useGlobalStore = defineStore('global', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
