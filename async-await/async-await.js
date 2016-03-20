'use strict';

const explode = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (explode) {
      reject('error');
    } else {
      resolve('done');
    }
  }, 2000)
});

async function main() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch(error) {
    console.log(error);
  }
  console.log('always');
}

main();
