<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'

  export default {
    name: 'app',
    components: {
      'app-menu': Menu
    }
  }
</script>
