'use strict';

function mixin(...mixins) {
  return function(target, name, descriptor) {
    mixins.forEach(function(obj) {
      for (const key in obj) {
        const desc = Object.getOwnPropertyDescriptor(obj, key);

        Object.defineProperty(target.prototype, key, desc);
      }
    });

    return descriptor;
  };
}

const BrainMixin = {
  think() {
    return 'Today is sunny.';
  }
};

const PhilosophyMixin = {
  ponder() {
    return 'What is the meaning of life?';
  }
};

@mixin(BrainMixin, PhilosophyMixin)
class Robot {
  destroyHumans() {
    return 'Humans destroyed.';
  }
}

const robot = new Robot();
console.log(robot.destroyHumans()); // "Humans destroyed."
console.log(robot.think()); // "Today is sunny."
console.log(robot.ponder()); // "What is the meaning of life?"
