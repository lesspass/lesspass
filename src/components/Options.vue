<style>
  #options input[type="number"] {
    -moz-appearance: textfield;
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
            <label for="types">{{ $t('Advanced options') }}</label>
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
    <div class="form-group row">
      <div class="col">
        <label for="passwordLength">{{ $t('Length') }}</label>
        <div class="input-group input-group-sm">
          <span class="input-group-btn" v-on:click="options.length=decrement(options.length, {min: 5, max: 35})">
            <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-minus"></i>
            </button>
          </span>
          <input id="passwordLength"
                 class="form-control form-control-sm"
                 type="number"
                 min="5"
                 max="35"
                 v-model.number="options.length">
          <span class="input-group-btn"
                v-on:click="options.length=increment(options.length, {min: 5, max: 35})">
            <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-plus"></i>
            </button>
          </span>
        </div>
      </div>
      <div class="col">
        <label for="passwordCounter"
               class="hint--top hint--medium"
               v-bind:aria-label="$t('CounterFieldHelp','Increment this value to change the generated password without changing your master password.')">
          {{$t('Counter')}}
        </label>
        <div class="input-group input-group-sm">
          <span class="input-group-btn" v-on:click="options.counter=decrement(options.counter, {min: 1})">
              <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-minus"></i>
            </button>
          </span>
          <input id="passwordCounter"
                 class="form-control form-control-sm"
                 type="number"
                 min="1"
                 v-model.number="options.counter">
          <span class="input-group-btn" v-on:click="options.counter=increment(options.counter, {min: 1})">
            <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-plus"></i>
            </button>
          </span>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <label>{{ $t('Version') }}</label>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col">
            <button type="button" class="btn btn-block btn-sm border-right-0"
                    v-bind:class="{'btn-primary':options.version===2,'btn-secondary':options.version!==2}"
                    v-on:click="setVersion(2)">
              <span class="hidden-xs-up">{{$t('version')}} </span>
              <span class="hidden-xs-down">{{$t('versionShortcut', 'v')}}</span>2
            </button>
          </div>
          <div class="col">
            <button type="button"
                    class="btn btn-block btn-sm border-left-0"
                    v-bind:class="{'btn-warning':options.version===1,'btn-secondary':options.version!==1}"
                    v-on:click="setVersion(1)">
              <span class="hidden-xs-up">{{$t('version')}} </span>
              <span class="hidden-xs-down">{{$t('versionShortcut', 'v')}}</span>1
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row mb-0">
      <div class="col">
        <button type="button" class="btn btn-sm hint--top-right hint--medium"
                v-bind:aria-label="$t('DefaultOptionLocalStorage', 'We use local storage to save default options locally. Each time you open the app, these options will be loaded by default.')"
                v-bind:class="{'btn-outline-warning':options.version===1,'btn-outline-primary':options.version!==1}"
                v-on:click="saveDefaultOptions()">
          <i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('Save options')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Message from '../services/message';
  import {increment, decrement} from "../services/form-validator";

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
        options: {
          uppercase: this.password.uppercase,
          lowercase: this.password.lowercase,
          numbers: this.password.numbers,
          symbols: this.password.symbols,
          length: this.password.length,
          counter: this.password.counter,
          version: this.password.version
        }
      };
    },
    watch: {
      options: {
        handler: function(newOptions) {
          if (newOptions.version === 1) {
            const dayBeforeOnlyV2 = this.getDayBeforeOnlyV2();
            const message = this.$t(
              "WarningV1",
              "Version 1 is deprecated and will be removed in {dayBeforeOnlyV2} days. We strongly advise you to migrate your passwords to version 2.",
              {dayBeforeOnlyV2});
            Message.error(message);
          }

          this.$emit('optionsUpdated', newOptions)
        },
        deep: true
      }
    },
    methods: {
      decrement,
      increment,
      setVersion(value){
        this.options.length = value === 1 ? 12 : 16;
        this.options.version = value;
        this.$store.dispatch('saveVersion', {version: value});
      },
      getDayBeforeOnlyV2(){
        const oneDay = 24 * 60 * 60 * 1000;
        const now = new Date();
        const onlyV2DefaultDate = new Date(2017, 4, 10);
        return Math.round(Math.abs((now.getTime() - onlyV2DefaultDate.getTime()) / (oneDay)));
      },
      saveDefaultOptions(){
        this.$store.dispatch('saveDefaultOptions', {options: this.options});
        Message.success(this.$t('Your options have been saved successfully'));
      },
    }
  }
</script>
