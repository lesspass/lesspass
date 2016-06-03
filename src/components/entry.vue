<template>
    <div class="card">
        <div class="card-header">
            {{ entry.site }}
            <a href="#" class="pull-xs-right" @click.stop.prevent="editEntry">edit</a>
        </div>
        <div class="card-block">
            <p class="card-text">
                <b>email/username : </b> {{ entry.login }}
                <br>
                <b>site : </b> {{ entry.site }}
            </p>
            <a href="#" class="btn btn-sm btn-primary" @click.stop.prevent="generatePassword">Copy password</a>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: ['entry'],
        methods:{
            editEntry(){
                this.$dispatch('edit-entry', this.entry)
            },
            generatePassword(){
                this.$dispatch('generate-password', this.entry)
            }
        }
    }
</script>
