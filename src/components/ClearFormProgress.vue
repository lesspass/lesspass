<template>
  <div class="progress" style="height: 1px;">
    <div class="progress-bar" role="progressbar" v-bind:style="{ width: width + '%' }" v-bind:aria-valuenow="width" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</template>
<script>
export default {
  name: "clearProgress",
  props: {
    duration: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      width: 100,
      clearInterval: null
    };
  },
  mounted() {
    this.clearInterval = setInterval(() => {
      this.width = this.width - 1;
    }, this.duration * 10);
  },
  watch: {
    width: function(value) {
      if (value <= 0) {
        clearInterval(this.clearInterval);
      }
    }
  }
};
</script>
