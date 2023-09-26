<script setup>
const store = useTodosStore();

const id = ref(null);

onUpdated(() => {
  store.todo = id;
  console.log('🚀 ~ file: searchBar.vue:8 ~ onUpdated ~ store.todo:', store.todo);
});

</script>
<template>
  <div class="relative grow mb-4 lg:me-5 lg:mb-0">
    {{ id }}
    <input
      id="number"
      v-model="id"
      type="number"
      name="number"
      class="text-left relative w-full px-5 py-5 bg-gray-200
        border border-gray-300 rounded-xl
      dark:bg-gray-800 dark:border-violet-700
      focus:outline-violet-700"
      required
      aria-describedby="email-error"
      placeholder="請輸入追蹤編號"
    >
  </div>
</template>
