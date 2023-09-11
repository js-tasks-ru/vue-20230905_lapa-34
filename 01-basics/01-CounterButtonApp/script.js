// import { count } from 'console';
import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const app = createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  
});

// console.log(app.mount('#app'))
app.mount('#app')



