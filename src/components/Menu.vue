<template>
  <div class="menu">
    <router-link :to="{ name: 'Index' }">Index</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
  </div>
</template>
<script>
  export default {
    name: 'menu'
  }
</script>
