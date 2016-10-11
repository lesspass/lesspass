<style>
    .fa-white {
        color: #ffffff;
    }
</style>
<template>
    <div id="delete-button">
        <button type="button" class="btn btn-danger" v-on:click="confirm">
            <i class="fa-white fa fa-trash"></i>
        </button>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                pending: false
            }
        },
        props: {
            action: {type: Function, required: true},
            text: {type: String, required: true},
            object: {type: Object, required: true}
        },
        methods: {
            confirm() {
                this.pending = true;
                var response = confirm(this.text);
                if (response == true) {
                    this.action(this.object);
                }
            }
        }
    }
</script>
