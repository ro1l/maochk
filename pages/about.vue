<script setup>

const trackStore = useTrackStore();

</script>
<template>
  <div>about</div>
  <div>{{ trackStore.name }}</div>
  <button @click="trackStore.addText">
    按我
  </button>
</template>
