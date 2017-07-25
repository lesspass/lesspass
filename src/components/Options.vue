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
                    v-bind:class="{'btn-primary':password.lowercase===true && password.version===2,'btn-warning':password.lowercase===true && password.version===1,'btn-secondary':password.lowercase===false}"
                    v-on:click="password.lowercase=!password.lowercase">
              a-z
            </button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.uppercase===true && password.version===2,'btn-warning':password.uppercase===true && password.version===1,'btn-secondary':password.uppercase===false}"
                    v-on:click="password.uppercase=!password.uppercase">
              A-Z
            </button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.numbers===true && password.version===2,'btn-warning':password.numbers===true && password.version===1,'btn-secondary':password.numbers===false}"
                    v-on:click="password.numbers=!password.numbers">
              0-9
            </button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.symbols===true && password.version===2,'btn-warning':password.symbols===true && password.version===1,'btn-secondary':password.symbols===false}"
                    v-on:click="password.symbols=!password.symbols">
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
          <span class="input-group-btn" v-on:click="password.length=decrement(password.length, {min: 5, max: 35})">
            <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-minus"></i>
            </button>
          </span>
          <input id="passwordLength"
                 class="form-control form-control-sm"
                 type="number"
                 min="5"
                 max="35"
                 v-model.number="password.length">
          <span class="input-group-btn"
                v-on:click="password.length=increment(password.length, {min: 5, max: 35})">
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
          <span class="input-group-btn" v-on:click="password.counter=decrement(password.counter, {min: 1})">
              <button class="btn btn-secondary p-1" type="button">
              <i class="fa fa-minus"></i>
            </button>
          </span>
          <input id="passwordCounter"
                 class="form-control form-control-sm"
                 type="number"
                 min="1"
                 v-model.number="password.counter">
          <span class="input-group-btn" v-on:click="password.counter=increment(password.counter, {min: 1})">
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
                    v-bind:class="{'btn-primary':password.version===2,'btn-secondary':password.version!==2}"
                    v-on:click="setVersion(2)">
              <span class="hidden-xs-up">{{$t('version')}} </span>
              <span class="hidden-xs-down">{{$t('versionShortcut', 'v')}}</span>2
            </button>
          </div>
          <div class="col">
            <button type="button"
                    class="btn btn-block btn-sm border-left-0"
                    v-bind:class="{'btn-warning':password.version===1,'btn-secondary':password.version!==1}"
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
                v-bind:class="{'btn-outline-warning':password.version===1,'btn-outline-primary':password.version!==1}"
                v-on:click="saveDefaultOptions()">
          <i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('Save options')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import message from '../services/message';
  import {increment, decrement} from "../services/form-validator";

  export default {
    name: 'options',
    computed: mapGetters(['password']),
    methods: {
      decrement,
      increment,
      setVersion(value){
        if (value === 1) {
          message.error(this.$t(
            "WarningV1Deprecated",
            "Version 1 is deprecated and will be deleted soon. We strongly advise you to migrate your passwords to version 2."
          ));
        }
        const password = Object.assign({}, this.password, {
          length: value === 1 ? 12 : 16,
          version: value
        });
        this.$store.dispatch('savePassword', {password});
        this.$store.dispatch('saveVersion', {version: value});
      },
      saveDefaultOptions(){
        this.$store.dispatch('saveDefaultOptions', {options: this.options});
        message.success(this.$t('Your options have been saved successfully'));
      },
    }
  }
</script>
