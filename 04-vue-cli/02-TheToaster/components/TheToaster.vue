<template>
      <div class="toasts">
        <UiToast 
          v-for="toast in toasts" 
          :key="toast.index"
          :type="toast.type"
          :message="toast.message"
          :timeout="toast.timeout"
          @close="deleteToast(toast.index)"></UiToast>
      </div>
</template>


<script>
import UiIcon from './UiIcon.vue';
import UiToast from './UiToast.vue';


export default {
  name: 'TheToaster',

  components: { 
    UiIcon,
    UiToast,
   },


  data() {
    return {
      toasts: [],
      couter: 0
    }
  },

  methods: {
    success(message) {
      this.couter++;
      const toastIndex = this.couter;
      const toast = {
          type : 'success',
          message: message,
          timeout: 5000,
          index: toastIndex
        };
      this.toasts.push(toast);
    },
    error(message) {
      this.couter++;
      const toastIndex = this.couter;

      const toast = {
          type : 'error',
          message: message,
          timeout: 5000,
          index: toastIndex,
        };

      this.toasts.push(toast);
    },
    deleteToast(index) {
      const toasts = this.toasts.filter((toast) => toast.index !== index);
      this.toasts = toasts;
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
  gap: 20px;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

</style>
