import test from "ava";
import formValidator from "../src/services/form-validator";

test("formValidator.increment()", t => {
  t.is(formValidator.increment(1, { min: 0, max: 10 }), 2);
  t.is(formValidator.increment(9, { min: 0, max: 10 }), 10);
  t.is(formValidator.increment(10, { min: 0, max: 10 }), 10);
  t.is(formValidator.increment(-1, { min: 0, max: 10 }), 0);
  t.is(formValidator.increment(-5, { min: 0, max: 10 }), 0);
  t.is(formValidator.increment(5, { min: 0 }), 6);
});

test("formValidator.decrement()", t => {
  t.is(formValidator.decrement(2, { min: 0, max: 10 }), 1);
  t.is(formValidator.decrement(1, { min: 0, max: 10 }), 0);
  t.is(formValidator.decrement(0, { min: 0, max: 10 }), 0);
  t.is(formValidator.decrement(-1, { min: 0, max: 10 }), 0);
  t.is(formValidator.decrement(15, { min: 0, max: 10 }), 10);
});
