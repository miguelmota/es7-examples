'use strict';

function log(target, name, descriptor) {
  let message = `LOG: Calling \`${name}\` function.`;

  if (typeof target === 'string') {
    message = target;

    return function(target, name, descriptor) {
      console.log(`LOG: ${message}`, name);
      return descriptor;
    };
  } else {
    console.log(message);
    return descriptor;
  }
}

class Robot {
  @log
  destroyHumans() {
    return `Destroying humans.`;
  }
}

const robot = new Robot();
console.log(robot.destroyHumans());
// LOG: Calling `destroyHumans` function.
// "Destroying humans."

class Robot2 {
  @log('Invoking the function `%s`')
  destroyHumans() {
    return `Destroying humans.`;
  }
}

const robot2 = new Robot2();
console.log(robot2.destroyHumans());
// LOG: Invoking the function `destroyHumans`
// "Destroying humans."
