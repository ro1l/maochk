<script setup>
const store = useTodosStore();

store.getTodos(store.todo);

</script>
<template>
  <button
    class="w-full text-left ps-5 py-3  rounded-xl bg-gray-300 text-md active:animate-pop
    lg:hover:bg-gray-400"
  >
    編號＃{{ store.todo.id }}
  </button>
  <div class="px-5">
    <ul>
      <li class="my-2">
        貨物名稱：{{ store.todo.title }}
      </li>
      <li class="my-2">
        貨物狀態：{{ store.todo.completed }}
      </li>
    </ul>
  </div>
</template>
