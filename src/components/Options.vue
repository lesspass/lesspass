<template>
    <div>
        <div class="form-group row no-gutters pt-3">
            <div class="col col-sm-2">
                <label class="custom-control custom-checkbox mr-0">
                    <input type="checkbox" class="custom-control-input" id="lowercase" v-model="options.lowercase">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">abc</span>
                </label>
            </div>
            <div class="col col-sm-2 text-center">
                <label class="custom-control custom-checkbox mr-0">
                    <input type="checkbox" class="custom-control-input" id="uppercase" v-model="options.uppercase">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">ABC</span>
                </label>
            </div>
            <div class="col col-sm-2 text-center">
                <label class="custom-control custom-checkbox mr-0">
                    <input type="checkbox" class="custom-control-input" id="numbers" v-model="options.numbers">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">123</span>
                </label>
            </div>
            <div class="col col-sm-2 text-right">
                <label class="custom-control custom-checkbox mr-0">
                    <input type="checkbox" class="custom-control-input" id="symbols" v-model="options.symbols">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">%!@</span>
                </label>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-4">
                <label for="passwordLength">
                    Length
                </label>
                <input id="passwordLength" class="form-control form-control-sm" type="number"
                       v-model="options.length" min="5" max="35">
            </div>
            <div class="col-4 text-center text-sm-left">
                <label for="passwordCounter">
                    Counter
                </label>
                <input id="passwordCounter" class="form-control form-control-sm" type="number"
                       v-model="options.counter" min="1">
            </div>
            <div class="col-4 text-sm-left text-right">
                <label>Version</label>
                <br>
                <div class="btn-group btn-group-sm">
                    <button type="button" class="btn"
                            v-bind:class="{'btn-primary':options.version===2,'btn-secondary':options.version!==2}"
                            v-on:click="setVersion(2)">
                        v2
                    </button>
                    <button type="button" class="btn"
                            v-bind:class="{'btn-warning':options.version===1,'btn-secondary':options.version!==1}"
                            v-on:click="setVersion(1)">
                        v1
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'options',
        props: {
            password: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                options: this.password
            };
        },
        watch: {
            options: {
                handler: function (newOptions) {
                    this.$emit('optionsUpdated', newOptions)
                },
                deep: true
            }
        },
        methods: {
            setVersion(value){
                this.options.version = value;
                this.$store.dispatch('saveVersion', {version: value});
            }
        }
    }
</script>
