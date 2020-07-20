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
            <label for="types">{{ $t('Options') }}</label>
          </div>
        </div>
        <div id="types" class="row">
          <div class="col-3">
            <button
              id="lowercase__btn"
              type="button"
              class="btn btn-block btn-sm px-0"
              tabindex="1"
              v-bind:class="{'btn-primary':options.lowercase===true, 'btn-secondary':options.lowercase===false}"
              v-on:click="options.lowercase=!options.lowercase"
            >a-z</button>
          </div>
          <div class="col-3">
            <button
              id="uppercase__btn"
              type="button"
              class="btn btn-block btn-sm px-0"
              tabindex="1"
              v-bind:class="{'btn-primary':options.uppercase===true, 'btn-secondary':options.uppercase===false}"
              v-on:click="options.uppercase=!options.uppercase"
            >A-Z</button>
          </div>
          <div class="col-3">
            <button
              id="numbers__btn"
              type="button"
              class="btn btn-block btn-sm px-0"
              tabindex="1"
              v-bind:class="{'btn-primary':options.numbers===true,'btn-secondary':options.numbers===false}"
              v-on:click="options.numbers=!options.numbers"
            >0-9</button>
          </div>
          <div class="col-3">
            <button
              id="symbols__btn"
              type="button"
              class="btn btn-block btn-sm px-0"
              tabindex="1"
              v-bind:class="{'btn-primary':options.symbols===true,'btn-secondary':options.symbols===false}"
              v-on:click="options.symbols=!options.symbols"
            >%!@</button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row mb-0">
      <div class="col-5 col-sm-4">
        <label for="passwordLength">{{ $t('Length') }}</label>
        <div class="input-group input-group-sm">
          <span class="input-group-btn">
            <button
              id="decreaseLength__btn"
              class="btn btn-primary btn-sm px-2"
              tabindex="1"
              type="button"
              v-on:click="options.length=decrement(options.length, {min: 5, max: 35})"
            >
              <small>
                <i class="fa fa-minus"></i>
              </small>
            </button>
          </span>
          <input
            id="passwordLength"
            class="form-control form-control-sm"
            tabindex="1"
            type="number"
            min="5"
            max="35"
            v-model.number="options.length"
          />
          <span class="input-group-btn">
            <button
              id="increaseLength__btn"
              class="btn btn-primary btn-sm px-2"
              tabindex="1"
              type="button"
              v-on:click="options.length=increment(options.length, {min: 5, max: 35})"
            >
              <small>
                <i class="fa fa-plus"></i>
              </small>
            </button>
          </span>
        </div>
      </div>
      <div class="col-5 col-sm-4">
        <label
          for="passwordCounter"
          data-balloon-length="large"
          v-bind:data-balloon="$t('CounterFieldHelp', 'Increment this value to change the generated password without changing your master options.')"
          data-balloon-pos="up"
        >{{$t('Counter')}}</label>
        <div class="input-group input-group-sm">
          <span class="input-group-btn">
            <button
              id="decreaseCounter__btn"
              class="btn btn-primary btn-sm px-2"
              tabindex="1"
              type="button"
              v-on:click="options.counter=decrement(options.counter, {min: 1})"
            >
              <small>
                <i class="fa fa-minus"></i>
              </small>
            </button>
          </span>
          <input
            id="passwordCounter"
            class="form-control form-control-sm"
            tabindex="1"
            type="number"
            min="1"
            v-model.number="options.counter"
          />
          <span class="input-group-btn">
            <button
              id="increaseCounter__btn"
              class="btn btn-primary btn-sm px-2"
              tabindex="1"
              type="button"
              v-on:click="options.counter=increment(options.counter, {min: 1})"
            >
              <small>
                <i class="fa fa-plus"></i>
              </small>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { increment, decrement } from "../services/form-validator";

export default {
  name: "options",
  props: {
    options: Object
  },
  methods: {
    decrement,
    increment
  }
};
</script>
