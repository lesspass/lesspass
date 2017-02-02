<template>
    <div>
        <label>Version</label>
        <br>
        <div class="btn-group btn-group-sm">
            <button type="button" class="btn"
                    v-bind:class="{'btn-primary':version===2,'btn-secondary':version!==2}" v-on:click="setVersion(2)">
                v2
            </button>
            <button type="button" class="btn"
                    v-bind:class="{'btn-warning':version===1,'btn-secondary':version!==1}" v-on:click="setVersion(1)">
                v1
            </button>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters(['version'])
        },
        methods: {
            setVersion(value){
                this.$store.dispatch('saveVersion', {version: value});
            }
        }
    }
</script>

