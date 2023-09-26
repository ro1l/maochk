<script setup>
const newSearch = ref([]);

function addNewSearch() {
  newSearch.value.push({});
}

</script>
<template>
  <div>
    <PageTitle :title="'追蹤貨物'" />
    <TrackComponent>
      <TrackComponentSearchBar v-for="(search, index) in newSearch" :key="index" />
      <button
        class="w-full flex -mt-3 mb-1 items-center justify-center py-2 text-gray-400 hover:text-black"
        @click.prevent="addNewSearch"
      >
        <IconPlusCircle class="pe-2 text-[1.8rem]" />
        增加查詢
      </button>
    </TrackComponent>
  </div>
</template>
