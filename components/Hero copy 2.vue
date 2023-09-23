<template>
  <div
    class=" w-full from-violet-300/50 z-50 -ms-8 m-auto
    bg-gradient-to-b dark:from-violet-600/[.15] via-transparent"
  >
    <div class="w-full z-10 -mt-32 pt-32 lg:-mt-36 lg:pt-36 max-w-[85rem] lg:mx-auto lg:px-8 py-10 lg:py-16max-w-2xl text-center">
      <p
        class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l
          from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"
      >
        Cargo Tracking Website
      </p>
      <!-- Title -->
      <div class="my-8 lg:my-12">
        <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          快速查詢
          <br>
          你的貨物狀況
        </h1>
      </div>
      <!-- End Title -->

      <div class="mt-5 max-w-3xl px-4 mx-auto">
        <p class="text-lg text-gray-600 dark:text-gray-400">
          只要輸入編號即可快速查詢你的貨物詳細狀況，也可以透過AI客服或轉接真人為你服務。
        </p>
      </div>
    </div>

    <SearchCard />
  </div>
</template>
