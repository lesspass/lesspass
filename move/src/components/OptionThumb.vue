<template>
  <div>
    <i class="fa fa-thumbs-up text-success" v-if="thumbUp"></i>
    <i class="fa fa-thumbs-down text-danger" v-else></i>
  </div>
</template>
<script>
  export default {
    name: 'OptionThumb',
    props: {
      thumbUp: {
        type: Boolean
      }
    },
  }
</script>
