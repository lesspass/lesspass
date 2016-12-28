<style scoped>
    .version {
        display: inline-block;
        padding: 0;
        margin: 0;
        position: relative;
    }

    #version-button {
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    #version-button + label {
        margin-bottom: 0;
    }

    #version-button + label:before {
        content: "v2 v1";
        display: inline-block;
        font-weight: normal;
        line-height: 1.25;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.5rem 0.25rem;
        font-size: 1rem;
        color: white;
        background: #f0ad4e;
        position: relative;
    }

    #version-button + label:after {
        content: "";
        box-sizing: border-box;
        display: inline-block;
        background: white;
        border: 1px solid #f0ad4e;
        width: 45%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: left 0.3s, border-color 0.3s;
    }

    #version-button:checked + label:after {
        left: 55%;
        border-color: #0275d8;
    }

    #version-button:checked + label:before {
        background-color: #0275d8;
    }

    #version-button:focus + label:after {
        border: 1px dotted #f0ad4e;
    }

    #version-button:checked:focus + label:after {
        border: 1px dotted #0275d8;
    }
</style>
<template>
    <div class="version">
        <input type="checkbox" id="version-button" v-model="checked"/>
        <label for="version-button"></label>
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
        data(){
            return {
                checked: this.version == 2
            }
        },
        watch: {
            checked(value){
                let version;
                if (value) {
                    version = 2;
                } else {
                    version = 1;
                }
                this.$store.commit('CHANGE_VERSION', {version: version});
            },
            version(value){
                this.checked = value == 2;
            }
        }
    }
</script>

