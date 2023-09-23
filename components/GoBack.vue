<script setup>
const router = useRouter();

function goBack() {
  return router.go(-1);
}
</script>
<template>
  <button @click="goBack">
    回上一頁
  </button>
</template>
