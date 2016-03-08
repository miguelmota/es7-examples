'use strict';

function time(target, name, descriptor) {
  const fn = descriptor.value;

  const decoratedFn = function() {
    console.time(name) ;
    const result = fn.apply(target, arguments);
    console.timeEnd(name);
    return result;
  };

  descriptor.value = decoratedFn;

  return descriptor;
}

class Robot {
  @time
  destroyHumans() {
    let humans = 7e9;

    while (humans--) {
      this.obliterate();
    }

    return `Humans destroyed.`;
  }

  obliterate() {}
}

const robot = new Robot();
console.log(robot.destroyHumans());
// destroyHumans: 7021ms
// Humans destroyed.
