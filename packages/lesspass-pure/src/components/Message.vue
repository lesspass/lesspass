<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#message {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  z-index: 20;
}

.close-notification {
  float: right;
  position: absolute;
  top: 0;
  right: 1em;
  cursor: pointer;
}
</style>
<template>
  <div id="message" v-on:click="keepMessage">
    <transition name="fade">
      <div v-if="message.text">
        <div
          class="card-header text-white"
          v-bind:class="{
            'bg-warning': message.status === 'warning',
            'bg-danger': message.status === 'error',
            'bg-success': message.status === 'success'
          }"
        >
          <div class="row">
            <div class="col-12">
              <small>{{ message.text }}</small>
              <span class="close-notification" v-on:click="hideMessage">
                <i class="fa fa-close"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import message from "../services/message";

export default {
  computed: mapState(["message"]),
  methods: {
    keepMessage() {
      message.keepMessage();
    },
    hideMessage() {
      message.hideMessage();
    }
  }
};
</script>
