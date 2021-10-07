import formValidator from "@/services/form-validator";

test("formValidator.increment()", () => {
  expect(formValidator.increment(1, { min: 0, max: 10 })).toBe(2);
  expect(formValidator.increment(9, { min: 0, max: 10 })).toBe(10);
  expect(formValidator.increment(10, { min: 0, max: 10 })).toBe(10);
  expect(formValidator.increment(-1, { min: 0, max: 10 })).toBe(0);
  expect(formValidator.increment(-5, { min: 0, max: 10 })).toBe(0);
  expect(formValidator.increment(5, { min: 0 })).toBe(6);
});

test("formValidator.decrement()", () => {
  expect(formValidator.decrement(2, { min: 0, max: 10 })).toBe(1);
  expect(formValidator.decrement(1, { min: 0, max: 10 })).toBe(0);
  expect(formValidator.decrement(0, { min: 0, max: 10 })).toBe(0);
  expect(formValidator.decrement(-1, { min: 0, max: 10 })).toBe(0);
  expect(formValidator.decrement(15, { min: 0, max: 10 })).toBe(10);
});
