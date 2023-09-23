<script setup>
const trackStore = useTrackStore();
</script>
<template>
  <div class="relative grow mb-6 lg:me-5 lg:mb-0">
    {{ trackStore.trackId }}
    <input
      id="number"
      v-model.number="trackStore.trackId"
      type="number"
      name="number"
      class="text-left w-full px-5 py-5 bg-gray-200 border shadow-sm border-gray-300 rounded-xl dark:bg-gray-800 dark:border-violet-700"
      required
      aria-describedby="email-error"
      placeholder="請輸入1~200之前的隨機數"
    >
    <div class="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
      <svg
        class="h-5 w-5 text-red-500"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
    </div>
  </div>

  <p id="email-error" class="hidden text-xs text-red-600 mt-2">
    Please include a valid email address so we can get back to you
  </p>
</template>
