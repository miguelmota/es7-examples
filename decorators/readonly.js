'use strict';

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Robot {
  @readonly
  destroyHumans() {
    return `Destroying humans.`;
  }
}

const robot = new Robot();
console.log(robot.destroyHumans());
// "Destroying humans."

robot.destroyHumans = () => { return false } ;
// TypeError: Cannot assign to read only property 'destroyHumans' of [object Object]
