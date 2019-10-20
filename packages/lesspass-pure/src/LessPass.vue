<style>
.lesspass--unbordered #lesspass {
  border: none;
}

.lesspass--full-width #lesspass {
  max-width: none !important;
}

#lesspass {
  color: #464646;
  max-width: 420px;
}

.lesspass__inner-box {
  min-height: 240px;
}

@media (max-width: 419px) {
  .lesspass__inner-box {
    border: none;
  }
}

#lesspass,
#lesspass * {
  border-radius: 0 !important;
}

button,
.pointer {
  cursor: pointer;
}

.inner-addon i {
  position: absolute;
  padding: 10px;
  pointer-events: none;
  z-index: 10;
}

.inner-addon {
  position: relative;
}

.left-addon i {
  left: 0;
}

.right-addon i {
  right: 0;
}

.left-addon input {
  padding-left: 30px;
}

.right-addon input {
  padding-right: 30px;
}
</style>
<template>
  <div id="lesspass" class="card">
    <lesspass-menu></lesspass-menu>
    <lesspass-message></lesspass-message>
    <div class="lesspass__inner-box card-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
import Message from "./components/Message.vue";

export default {
  name: "lesspass",
  components: {
    "lesspass-menu": Menu,
    "lesspass-message": Message
  },
  created() {
    this.$store.dispatch("cleanMessage");
    this.$store.dispatch("refreshToken");
    this.$store.dispatch("resetPassword");
  }
};
</script>

