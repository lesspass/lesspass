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
        type="text"
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
  import Awesomplete from "awesomplete";
  import {getSuggestions} from "../services/url-parser";

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
      const siteField = this.$refs.siteField;
      this.awesomplete = new Awesomplete(siteField,{
        minChars: 0,
        maxItems: 5
      });
      this.awesomplete.list = this.passwords;
      this.awesomplete.item = (element, input) => {
        let item = Awesomplete.ITEM(element.value.site, input);
        item.innerHTML += ` ${element.value.login}`;
        return item;
      };
      this.awesomplete.filter = (site, input) => {
        return Awesomplete.FILTER_CONTAINS(site, input) ||
          Awesomplete.FILTER_CONTAINS(input, site);
      };
      this.awesomplete.data = data => {
        return {label: data.site, value: data}
      };
      this.awesomplete.replace = suggestion => {
        siteField.value = suggestion.label;
        const passwordProfile = suggestion.value;
        this.$emit("passwordProfileSelected", suggestion.value);
      };
      this.awesomplete.sort = (a,b) => {
        return a.value.site.localeCompare(b.value.site) ||
          a.value.login.localeCompare(b.value.login);
      }
    },
    computed: {
      site: {
        get: function () {
          return this.value;
        },
        set: function (newValue) {
          this.$emit("input", newValue);
        }
      },
      suggestions: function () {
        return this.passwords
      }
    },
    watch: {
      suggestions: function (newValue, _) {
        this.awesomplete.list = newValue;
      }
    },
    methods: {}
  };
</script>
