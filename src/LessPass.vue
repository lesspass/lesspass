<template>
  <div id="lesspass" class="card">
    <lesspass-menu></lesspass-menu>
    <lesspass-message></lesspass-message>
    <div class="lesspass__inner-box card-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './LessPass.scss';
  import Menu from './components/Menu.vue';
  import Message from './components/Message.vue';

  export default {
    name: 'LessPass',
    components: {
      'lesspass-menu': Menu,
      'lesspass-message': Message
    },
    created(){
      this.$store.dispatch('cleanMessage');
      this.$store.dispatch('refreshToken');
    }
  }
</script>
