<template>
  <!-- Hero -->
  <div
    class="relative overflow-hidden bg-bkg"
  >
    <!-- Gradients -->
    <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
      <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
      <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
    </div>
    <!-- End Gradients -->

    <div class="relative z-10 pt-32 lg:pt-36">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="max-w-2xl text-center mx-auto">
          <p
            class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l
          from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"
          >
            Cargo Tracking Website
          </p>

          <!-- Title -->
          <div class="mt-5 max-w-2xl">
            <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              快速查詢你的貨物狀況
            </h1>
          </div>
          <!-- End Title -->

          <div class="mt-5 max-w-3xl">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              只要輸入編號即可快速查詢你的貨物詳細狀況，也可以透過智慧AI進行相關提問，若有問題也可以直接轉由真人為你服務。
            </p>
          </div>

          <!-- Buttons -->
          <!-- End Buttons -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero -->
  <SearchCard />
</template>
