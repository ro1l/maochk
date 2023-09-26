<script setup>
const store = useTodosStore();
const router = useRouter();

function goBack() {
  store.todo = [];
  return router.go(-1);
}
</script>
<template>
  <div class="flex items-center pb-5">
    <div class="text-black me-2">
      <IconCaretLeft />
    </div>
    <button
      class=""
      @click="goBack"
    >
      返回
    </button>
  </div>
</template>
