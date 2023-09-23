export const useTrackStore = defineStore('track', () => {
  const name = ref('je');
  const trackId = ref(null);

  function addText() {
    name.value = '改變了';
  }
  return { name, addText, trackId };
});

// methods 2:
// export const useTrackStore = defineStore('track', {
//   // state: () => ({ count: 0, name: 'Eduardo' }),
//   const name = ref('je');
//   return{ name, }
// });

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTrackStore, import.meta.hot));
// }
