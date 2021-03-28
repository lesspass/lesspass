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
    <div class="row mb-2">
      <label for="types">{{ $t("Options") }}</label>
      <div id="types" class="row">
        <div class="col-3">
          <div class="form-check">
            <input
              id="lowercase__btn"
              type="checkbox"
              tabindex="1"
              class="form-check-input"
              v-model="options.lowercase"
            />
            <label class="form-check-label" for="lowercase__btn">
              a-z
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="form-check">
            <input
              id="uppercase__btn"
              type="checkbox"
              tabindex="1"
              class="form-check-input"
              v-model="options.uppercase"
            />
            <label class="form-check-label" for="uppercase__btn">
              A-Z
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="form-check">
            <input
              id="numbers__btn"
              type="checkbox"
              tabindex="1"
              class="form-check-input"
              v-model="options.numbers"
            />
            <label class="form-check-label" for="numbers__btn">
              0-9
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="form-check">
            <input
              id="symbols__btn"
              type="checkbox"
              tabindex="1"
              class="form-check-input"
              v-model="options.symbols"
            />
            <label class="form-check-label" for="symbols__btn">
              %!@
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5 col-sm-4">
        <label for="passwordLength">{{ $t("Length") }}</label>
        <div class="input-group input-group-sm">
          <button
            id="decreaseLength__btn"
            class="btn btn-primary px-2"
            tabindex="1"
            type="button"
            v-on:click="
              options.length = decrement(options.length, { min: 5, max: 35 })
            "
          >
            <small>
              <i class="fa fa-minus"></i>
            </small>
          </button>
          <input
            id="passwordLength"
            class="form-control form-control-sm"
            tabindex="1"
            type="number"
            min="5"
            max="35"
            v-model.number="options.length"
          />
          <button
            id="increaseLength__btn"
            class="btn btn-primary px-2"
            tabindex="1"
            type="button"
            v-on:click="
              options.length = increment(options.length, { min: 5, max: 35 })
            "
          >
            <small>
              <i class="fa fa-plus"></i>
            </small>
          </button>
        </div>
      </div>
      <div class="col-5 col-sm-4">
        <label
          for="passwordCounter"
          data-balloon-length="large"
          v-bind:data-balloon="
            $t(
              'CounterFieldHelp',
              'Increment this value to change the generated password without changing your master options.'
            )
          "
          data-balloon-pos="up"
          >{{ $t("Counter") }}</label
        >
        <div class="input-group input-group-sm">
          <button
            id="decreaseCounter__btn"
            class="btn btn-primary px-2"
            tabindex="1"
            type="button"
            v-on:click="
              options.counter = decrement(options.counter, { min: 1 })
            "
          >
            <small>
              <i class="fa fa-minus"></i>
            </small>
          </button>
          <input
            id="passwordCounter"
            class="form-control form-control-sm"
            tabindex="1"
            type="number"
            min="1"
            v-model.number="options.counter"
          />
          <button
            id="increaseCounter__btn"
            class="btn btn-primary px-2"
            tabindex="1"
            type="button"
            v-on:click="
              options.counter = increment(options.counter, { min: 1 })
            "
          >
            <small>
              <i class="fa fa-plus"></i>
            </small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
