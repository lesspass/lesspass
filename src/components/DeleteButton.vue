<template>
    <div id="delete-button">
        <div class="form-group has-danger" v-if="confirm">
            <button type="button" class="btn btn-danger btn-sm" v-on:click.prevent="confirmDelete">
                {{ confirmButton }}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" v-on:click.prevent="confirm=false">
                {{ cancelButton }}
            </button>
            <div class="form-control-feedback">{{ confirmText }}</div>
        </div>
        <button type="button" class="btn btn-outline-danger btn-sm"
                v-if="!confirm"
                v-on:click.prevent="confirm=true">
            <i class="fa fa-trash fa-fw"></i>
        </button>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                confirm: false
            }
        },
        props: {
            confirmText: {
                type: String,
                default: 'Are you sure you want to delete this?'
            },
            confirmButton: {
                type: String,
                default: 'Sure delete it'
            },
            cancelButton: {
                type: String,
                default: 'Oups no!'
            }
        },
        methods: {
            confirmDelete(){
                this.confirm = false;
                this.$emit('remove');
            }
        }
    }
</script>
