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
  position: relative;
}

.lesspass__inner-box {
  min-height: 240px;
}

@media (max-width: 419px) {
  .lesspass__inner-box {
    border: none;
  }
}

button,
.pointer {
  cursor: pointer;
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
        <svg
          width="57"
          height="57"
          viewBox="0 0 57 57"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#0275d8"
          class="loading__icon"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle cx="5" cy="50" r="5">
                <animate
                  attributeName="cy"
                  begin="0s"
                  dur="2.2s"
                  values="50;5;50;50"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cx"
                  begin="0s"
                  dur="2.2s"
                  values="5;27;49;5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="27" cy="5" r="5">
                <animate
                  attributeName="cy"
                  begin="0s"
                  dur="2.2s"
                  from="5"
                  to="5"
                  values="5;50;50;5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cx"
                  begin="0s"
                  dur="2.2s"
                  from="27"
                  to="27"
                  values="27;49;5;27"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="49" cy="50" r="5">
                <animate
                  attributeName="cy"
                  begin="0s"
                  dur="2.2s"
                  values="50;50;5;50"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cx"
                  from="49"
                  to="49"
                  begin="0s"
                  dur="2.2s"
                  values="49;5;27;49"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
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
