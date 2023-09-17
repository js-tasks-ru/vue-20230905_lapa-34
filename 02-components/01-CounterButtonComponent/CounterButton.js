// import { count } from 'console';
import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие

  props: {
    count: {
      type: Number,
      default: 0
    },
  },

  template: `<button type="button"   @click="$emit('update:count', count+1)">{{ count }}</button>`,
});
