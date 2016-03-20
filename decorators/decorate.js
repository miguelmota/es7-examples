'use strict';

function decorate(fn) {
  return function(target, name, descriptor) {
    return {
      configurable: true,
      enumerable: false,
      value: function() {
        return fn(descriptor.value);
      }
    }
  };
}

function memoize(fn) {
  const cached = memoize.cache[fn];

  if (cached) {
    console.log('Cache hit!');
    return cached;
  }

  const value = fn();
  memoize.cache[fn] = value;

  console.log('Cache miss.');
  return value;
}

memoize.cache = {};

class Robot {
  @decorate(memoize)
  destroyHumans() {
    return 'Humans destroyed.';
  }
}

const robot = new Robot();
console.log(robot.destroyHumans());
// Cache miss.
// Humans destroyed.
console.log(robot.destroyHumans());
// Cache hit!
// Humans destroyed.
