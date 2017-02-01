<template>
    <div>
        <label>Version</label>
        <br>
        <div class="btn-group btn-group-sm">
            <button type="button" class="btn"
                    v-bind:class="{'btn-primary':version===2,'btn-secondary':version!==2}" v-on:click="setVersion(2)">
                v1
            </button>
            <button type="button" class="btn"
                    v-bind:class="{'btn-warning':version===1,'btn-secondary':version!==1}" v-on:click="setVersion(1)">
                v2
            </button>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    export default {
        props: {
            version: {
                type: Number
            }
        },
        methods: {
            setVersion(value){
                this.version = value;
                this.$store.commit('CHANGE_VERSION', {version: value});
            }
        }
    }
</script>

