<script setup>
// definePageMeta({
//   layout: 'custom'
// })

// live chat
onMounted(() => {
  var Tawk_API = Tawk_API || {};
  const Tawk_LoadStart = new Date();
  (function () {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/650bb13bb1aaa13b7a7805f0/1haqqol10';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  }());
});
</script>

<template>
  <div>
    <Hero />
  </div>
</template>
