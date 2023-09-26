import { SearchBar } from '#build/components';
<script setup>
</script>
<template>
  <form class="lg:flex">
    <TrackComponentSearchBar />
    <slot />
    <TrackComponentSearchBtn />
  </form>
</template>
