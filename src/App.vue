<style>
  #app, #app * {
    border-radius: 0 !important;
  }
</style>
<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
  import Index from '@/components/Index'
  export default {
    name: 'app',
    components: {
      Index
    },
  }
</script>
