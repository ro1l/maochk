export const useTodosStore = defineStore('user', {
  state: () => ({
    todo: [],
    id: [],
  }),
  actions: {
    async getTodos(id) {
      try {
        const { data } = await useFetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
        );
        this.todo = data.value;
      } catch (error) {
        return error;
      }
      return null;
    },
    setTodo(newValue) {
      this.todo = newValue;
    },
  },
});

// export const useTrackStore = defineStore('track', {
//   const track = ref(null);

//   async getTrack(id) {
//     try
//   }
// })

// export const useTodosStore = defineStore('todos', {
//   state: () => ({
//     todos: [],
//   }),
//   actions: {
//     async fetchTodos() {
//       const { data } = await useFetch(
//         'https://jsonplaceholder.typicode.com/todos',
//       );
//       console.log(data);
//       this.todos = data;
//       console.log(this.todos);
//     },
//   },
// });

// export const useTrackStore = defineStore('track', () => {
// const { id } = useRoute().params;
// const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

// const track1 = ref('');
// async function fetchTodos() {
//   const data1 = await useFetch(url);
// }

// const name = ref('je');
// const trackId = ref(null);

// function addText() {
//   name.value = '改變了';
// }
// return {
//   name, addText, trackId, fetchTodos, track1,
// };
// });

// methods 2:
// export const useTrackStore = defineStore('track', {
//   // state: () => ({ count: 0, name: 'Eduardo' }),
//   const name = ref('je');
//   return{ name, }
// });

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTrackStore, import.meta.hot));
// }
