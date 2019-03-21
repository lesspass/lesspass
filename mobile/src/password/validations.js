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

export function areOptionsValid({ lowercase, uppercase, digits, symbols }) {
  return lowercase || uppercase || digits || symbols;
}

export function isProfileValid({
  site,
  length,
  counter,
  lowercase,
  uppercase,
  digits,
  symbols
}) {
  return (
    isLengthValid(length) &&
    isCounterValid(counter) &&
    areOptionsValid({ lowercase, uppercase, digits, symbols }) &&
    site !== ""
  );
}
