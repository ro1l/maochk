<template>
  <div
    class="mx-auto w-full lg:w-[80%] p-7 rounded-xl dark:border-violet-700"
  >
    <form>
      <!-- Form Group -->
      <div class="flex flex-col lg:flex-row">
        <div class="relative grow mb-6 lg:me-5 lg:mb-0">
          <input
            id="email"
            type="email"
            name="email"
            class="text-left w-full px-5 py-5 bg-gray-200 border shadow-sm border-gray-300 rounded-xl dark:bg-gray-800 dark:border-violet-700"
            required
            aria-describedby="email-error"
            placeholder="請輸入16碼編號"
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

        <button class="px-5 py-4 rounded-xl bg-violet-600 text-white hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800 grow lg:grow-0">
          查詢貨物進度
        </button>
      </div>
    </form>
  </div>
</template>
