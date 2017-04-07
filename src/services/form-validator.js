function apply_constraint(value, {min, max}) {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min
  }
  return value;
}

export function increment(value, {min = 0, max}) {
  return apply_constraint(value + 1, {min, max});
}

export function decrement(value, {min, max}) {
  return apply_constraint(value - 1, {min, max});
}

export default {
  increment,
  decrement,
};
