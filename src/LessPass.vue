<template>
  <div id="lesspass" class="card">
    <lesspass-menu></lesspass-menu>
    <lesspass-message></lesspass-message>
    <div class="lesspass__inner-box card-block">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './LessPass.scss';
  import Menu from './components/Menu.vue';
  import Message from './components/Message.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'LessPass',
    components: {
      'lesspass-menu': Menu,
      'lesspass-message': Message
    },
    computed: mapGetters(['version']),
    created(){
      this.$store.dispatch('cleanMessage');
      this.$store.dispatch('loadPasswordFirstTime');
      this.$store.dispatch('refreshToken');
    }
  }
</script>
