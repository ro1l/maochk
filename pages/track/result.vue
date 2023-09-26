<script setup>
const store = useTodosStore();
console.log('🚀 ~ file: result.vue:3 ~ store:', store.todo);

</script>

<template>
  <div>
    <GoBack />
    <PageTitle :title="'查詢結果'" />
    <TrackComponentTrackProgressCard v-if="store.todo !== ''" />
    <div v-else class="bg-red-400">
      無資料
    </div>
  </div>
</template>
