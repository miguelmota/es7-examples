'use strict';

function bind(fn, context) {
  return fn.bind(context);
}

function autobind(target, name, descriptor) {
  return {
    configurable: true,
    enumerable: false,

    get() {
      return bind(descriptor.value, this)
    },

    set(newValue) {
      return newValue;
    }
  };
}

class Robot {
  @autobind
  getSelf() {
    this.foo = 'bar'
    return this;
  }
}

const robot = new Robot();
let getSelf = robot.getSelf;
console.log(getSelf()); // { foo: 'bar' }
