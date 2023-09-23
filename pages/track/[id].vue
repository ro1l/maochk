<script setup>
const { id } = useRoute().params;
const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

const { data: track } = await useFetch(url);

</script>
<template>
  <div v-if="track">
    {{ track }}
  </div>
  <div v-else>
    無編號“{{ id }}”
  </div>
</template>
