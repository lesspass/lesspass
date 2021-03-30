<style>
.lesspass--unbordered #lesspass {
  border: none;
}

.lesspass--full-width #lesspass {
  max-width: none !important;
  max-height: 480px;
  overflow: auto;
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

#loading__view {
  position: relative;
  height: 358px;
}

.loading__icon {
  width: 64px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
<template>
  <div id="lesspass" class="card">
    <lesspass-menu></lesspass-menu>
    <lesspass-message></lesspass-message>
    <div class="lesspass__inner-box card-body">
      <div id="loading__view" v-if="isLoading">
        <img src="./images/loading.svg" alt="loading" class="loading__icon" />
      </div>
      <router-view v-else></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getBaseURL } from "./api/baseURL";
import Menu from "./components/Menu.vue";
import Message from "./components/Message.vue";

export default {
  name: "lesspass",
  components: {
    "lesspass-menu": Menu,
    "lesspass-message": Message
  },
  data: () => ({
    isLoading: false
  }),
  created() {
    this.$store.dispatch("cleanMessage");
    this.$store.dispatch("resetPassword");
    const refresh = localStorage.getItem("refresh_token");
    if (refresh) {
      this.isLoading = true;
      axios
        .post("/api/auth/jwt/refresh/", { refresh }, { baseURL: getBaseURL() })
        .then(response => {
          this.$store.dispatch("login", response.data);
          return this.$store.dispatch("getPasswords");
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>
