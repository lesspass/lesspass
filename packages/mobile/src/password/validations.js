export function isLengthValid(value) {
  const minValue = 5;
  const maxValue = 35;
  let isValid = true;
  if (!Number.isInteger(value)) isValid = false;
  if (value < minValue) isValid = false;
  if (value > maxValue) isValid = false;
  return isValid;
}

export function isCounterValid(value) {
  const minValue = 1;
  let isValid = true;
  if (!Number.isInteger(value)) isValid = false;
  if (value < minValue) isValid = false;
  return isValid;
}

export function areOptionsValid(options) {
  const { lowercase, uppercase, digits, symbols } = options;
  return lowercase || uppercase || digits || symbols;
}

export function isProfileValid(profile) {
  const { options } = profile;
  const { length, counter } = options;
  return (
    isLengthValid(length) && isCounterValid(counter) && areOptionsValid(options)
  );
}
