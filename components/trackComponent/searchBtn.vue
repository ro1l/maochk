<script setup>
const store = useTodosStore();
</script>
<template>
  <NuxtLink :to="`/track/result`">
    <button
      :disabled="store.todo.length === 0"
      class="w-full py-5 px-12 rounded-xl bg-violet-600 text-white text-md active:animate-pop
    hover:bg-violet-900"
    >
      查詢進度
    </button>
  </NuxtLink>
</template>
