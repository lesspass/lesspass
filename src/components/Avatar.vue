<style>
  .passwordProfile__avatar {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    margin-right: 1em;
    text-transform: uppercase;
    color: white;
    font-family: monospace;
  }
</style>
<template>
  <div v-bind:style="avatarStyle"
       class="passwordProfile__avatar">
      {{firstLetter}}
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'avatar',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        alphabetColors: {
          a: "#5A8770",
          b: "#B2B7BB",
          c: "#6FA9AB",
          d: "#F5AF29",
          e: "#0088B9",
          f: "#F18636",
          g: "#D93A37",
          h: "#A6B12E",
          i: "#5C9BBC",
          j: "#F5888D",
          k: "#9A89B5",
          l: "#407887",
          m: "#9A89B5",
          n: "#5A8770",
          o: "#D33F33",
          p: "#A2B01F",
          q: "#F0B126",
          r: "#0087BF",
          s: "#F18636",
          t: "#0087BF",
          u: "#B2B7BB",
          v: "#72ACAE",
          w: "#9C8AB4",
          x: "#5A8770",
          y: "#EEB424",
          z: "#407887"
        },
        firstLetter: ''
      }
    },
    mounted() {
      this.firstLetter = this.$props.name.charAt(0);
    },
    computed: {
      avatarStyle: function() {
        return {
          backgroundColor: this.alphabetColors[this.firstLetter] || '#5A8770'
        }
      }
    }
  }
</script>

