<style>
    #options input[type="number"] {
        -moz-appearance:textfield;
    }

    #options input[type="number"]::-webkit-outer-spin-button,
    #options input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
<template>
    <div id="options">
        <div class="form-group row">
            <div class="col-12">
                <div class="row">
                    <div class="col">
                        <label for="types">Advanced options</label>
                    </div>
                </div>
                <div id="types" class="row">
                    <div class="col-3">
                        <button type="button" class="btn btn-block btn-sm px-0"
                                v-bind:class="{'btn-primary':options.lowercase===true && options.version===2,'btn-warning':options.lowercase===true && options.version===1,'btn-secondary':options.lowercase===false}"
                                v-on:click="options.lowercase=!options.lowercase">
                            a-z
                        </button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-block btn-sm px-0"
                                v-bind:class="{'btn-primary':options.uppercase===true && options.version===2,'btn-warning':options.uppercase===true && options.version===1,'btn-secondary':options.uppercase===false}"
                                v-on:click="options.uppercase=!options.uppercase">
                            A-Z
                        </button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-block btn-sm px-0"
                                v-bind:class="{'btn-primary':options.numbers===true && options.version===2,'btn-warning':options.numbers===true && options.version===1,'btn-secondary':options.numbers===false}"
                                v-on:click="options.numbers=!options.numbers">
                            0-9
                        </button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-block btn-sm px-0"
                                v-bind:class="{'btn-primary':options.symbols===true && options.version===2,'btn-warning':options.symbols===true && options.version===1,'btn-secondary':options.symbols===false}"
                                v-on:click="options.symbols=!options.symbols">
                            %!@
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group row mb-0">
            <div class="col-6 col-sm-4 mb-3 mb-sm-0">
                <label for="passwordLength">Length</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-btn" v-on:click="options.length-=1">
                        <button class="btn btn-secondary" type="button"><i class="fa fa-minus"></i></button>
                    </span>
                    <input id="passwordLength" class="form-control form-control-sm" type="number"
                           v-model="options.length" min="5" max="35">
                    <span class="input-group-btn" v-on:click="options.length+=1">
                        <button class="btn btn-secondary" type="button"><i class="fa fa-plus"></i></button>
                    </span>
                </div>
            </div>
            <div class="col-6 col-sm-4 mb-3 mb-sm-0">
                <label for="passwordCounter"
                class="hint--top hint--medium" aria-label="Increment counter field to change generated password without changing your master password.">Counter</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-btn" v-on:click="options.counter-=1">
                        <button class="btn btn-secondary" type="button"><i class="fa fa-minus"></i></button>
                    </span>
                    <input id="passwordCounter" class="form-control form-control-sm" type="number"
                           v-model="options.counter" min="1">
                    <span class="input-group-btn" v-on:click="options.counter+=1">
                        <button class="btn btn-secondary" type="button"><i class="fa fa-plus"></i></button>
                    </span>
                </div>
            </div>
            <div class="clearfix hidden-sm-up"></div>
            <div class="col-12 col-sm-4">
                <div class="row hidden-sm-down">
                    <div class="col">
                        <label>Version</label>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-6">
                        <button type="button" class="btn btn-block btn-sm border-right-0"
                                v-bind:class="{'btn-primary':options.version===2,'btn-secondary':options.version!==2}"
                                v-on:click="setVersion(2)">
                            v<span class="hidden-sm-up">ersion </span>2
                        </button>

                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-block btn-sm border-left-0 hint--top-left hint--medium hint--error"
                                aria-label="Version 1 is deprecated and will be removed. We strongly advise you to use version 2."
                                v-bind:class="{'btn-warning':options.version===1,'btn-secondary':options.version!==1}"
                                v-on:click="setVersion(1)">
                            v<span class="hidden-sm-up">ersion </span>1
                        </button>
                    </div>
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
                this.options.length = value === 1 ? 12 : 16;
                this.options.version = value;
                this.$store.dispatch('saveVersion', {version: value});
            }
        }
    }
</script>
