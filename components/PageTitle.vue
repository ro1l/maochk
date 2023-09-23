<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div>
    <h1 class="text-lg font-medium mb-6 text-violet-500">
      {{ props.title }}
    </h1>
  </div>
</template>
