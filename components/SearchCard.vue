<script setup>
</script>
<template>
  <div
    class="mx-auto w-full lg:w-[80%] rounded-xl dark:border-violet-700"
  >
    <form>
      <!-- Form Group -->
      <div class="flex flex-col lg:flex-row">
        <SearchBar2 />
        <slot />

        <NuxtLink :to="`/track/result`">
          <button class="p-5 rounded-xl w-full bg-violet-600 text-white hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800 grow lg:grow-0">
            查詢貨物進度
          </button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
