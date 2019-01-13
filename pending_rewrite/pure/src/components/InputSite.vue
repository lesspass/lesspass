<style>
.awesomplete mark {
  background-color: transparent !important;
  padding: 0;
  margin: 0;
  color: inherit;
}
</style>
<template>
  <div class="inputSite">
    <label for="siteField" class="sr-only">{{ label }}</label>
    <div class="inner-addon left-addon">
      <i class="fa fa-globe"></i>
      <input 
        id="siteField"
        name="siteField"
        ref="siteField"
        class="form-control awesomplete"
        autocorrect="off"
        autocapitalize="none"
        v-bind:placeholder="label"
        v-model="site">
    </div>
  </div>
</template>
<script>
import debounce from "lodash.debounce";
import uniqBy from "lodash.uniqby";
import { mapGetters, mapState } from "vuex";
import Awesomplete from "awesomplete";
import { getSuggestions } from "../services/url-parser";

export default {
  name: "inputSite",
  props: {
    value: String,
    label: String,
    passwords: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.awesomplete = new Awesomplete(this.$refs.siteField);
  },
  computed: {
    site: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  watch: {
    site: function(newValue, oldValue) {
      const suggestions = getSuggestions(newValue).map(suggestion => {
        return { label: suggestion, value: null };
      });
      const passwordProfiles = this.passwords.map(password => {
        return { label: password.site, value: password };
      });
      this.awesomplete.list = uniqBy(
        passwordProfiles.concat(suggestions),
        "label"
      );
      this.awesomplete.filter = function(site, input) {
        const inputLowercase = input.toLowerCase();
        const siteLowercase = site.trim().toLowerCase();
        return (
          siteLowercase.indexOf(inputLowercase) !== -1 ||
          inputLowercase.indexOf(siteLowercase) !== -1
        );
      };
      const vm = this;
      this.awesomplete.replace = function(password) {
        this.input.value = password.label;
        if (password.value) {
          vm.$emit("passwordProfileSelected", password.value);
        } else {
          vm.$emit("suggestionSelected");
        }
      };

      this.awesomplete.evaluate();
    }
  },
  methods: {}
};
</script>
