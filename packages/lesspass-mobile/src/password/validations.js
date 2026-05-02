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
  masterPassword,
  length,
  counter,
  lowercase,
  uppercase,
  digits,
  symbols,
}) {
  return (
    isMasterPasswordValid(masterPassword) &&
    isLengthValid(length) &&
    isCounterValid(counter) &&
    areOptionsValid({ lowercase, uppercase, digits, symbols }) &&
    site !== ""
  );
}

export function isMasterPasswordValid(masterPassword) {
  const minLength = 10;
  if (!masterPassword) return false;
  if (masterPassword.length < minLength) return false;
  return true
}