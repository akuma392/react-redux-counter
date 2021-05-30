export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}

export function reset() {
  return {
    type: 'reset',
  };
}

export function steps(step) {
  return {
    type: 'step',
    payload: step,
  };
}
