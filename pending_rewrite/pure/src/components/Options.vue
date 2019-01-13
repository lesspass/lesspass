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
            <button id="lowercase__btn"
                    type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.lowercase===true, 'btn-secondary':password.lowercase===false}"
                    v-on:click="password.lowercase=!password.lowercase">
              a-z
            </button>
          </div>
          <div class="col-3">
            <button id="uppercase__btn"
                    type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.uppercase===true, 'btn-secondary':password.uppercase===false}"
                    v-on:click="password.uppercase=!password.uppercase">
              A-Z
            </button>
          </div>
          <div class="col-3">
            <button id="numbers__btn"
                    type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.numbers===true,'btn-secondary':password.numbers===false}"
                    v-on:click="password.numbers=!password.numbers">
              0-9
            </button>
          </div>
          <div class="col-3">
            <button id="symbols__btn"
                    type="button" class="btn btn-block btn-sm px-0"
                    v-bind:class="{'btn-primary':password.symbols===true,'btn-secondary':password.symbols===false}"
                    v-on:click="password.symbols=!password.symbols">
              %!@
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row mb-0">
      <div class="col-5 col-sm-4">
        <label for="passwordLength">{{ $t('Length') }}</label>
        <div class="input-group input-group-sm">
          <span class="input-group-btn" v-on:click="password.length=decrement(password.length, {min: 5, max: 35})">
            <button id="decreaseLength__btn" class="btn btn-primary border-blue px-2" type="button">
              <small><i class="fa fa-minus"></i></small>
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
            <button id="increaseLength__btn" class="btn btn-primary border-blue px-2" type="button">
              <small><i class="fa fa-plus"></i></small>
            </button>
          </span>
        </div>
      </div>
      <div class="col-5 col-sm-4">
        <label for="passwordCounter"
               data-balloon-length="large"
               v-bind:data-balloon="$t('CounterFieldHelp', 'Increment this value to change the generated password without changing your master password.')"
               data-balloon-pos="up">
          {{$t('Counter')}}
        </label>
        <div class="input-group input-group-sm">
          <span id="decreaseCounter__btn" class="input-group-btn"
                v-on:click="password.counter=decrement(password.counter, {min: 1})">
              <button class="btn btn-primary border-blue px-2" type="button">
              <small><i class="fa fa-minus"></i></small>
            </button>
          </span>
          <input id="passwordCounter"
                 class="form-control form-control-sm"
                 type="number"
                 min="1"
                 v-model.number="password.counter">
          <span id="increaseCounter__btn" class="input-group-btn"
                v-on:click="password.counter=increment(password.counter, {min: 1})">
            <button class="btn btn-primary border-blue px-2" type="button">
              <small><i class="fa fa-plus"></i></small>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import message from '../services/message';
  import {increment, decrement} from "../services/form-validator";
  import { mapState} from 'vuex';

  export default {
    name: 'options',
    computed: {
      ...mapState(['password']),
    },
    methods: {
      decrement,
      increment
    }
  }
</script>
