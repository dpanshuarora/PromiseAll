promiseAll = (promiseArray) => {
  let innerPromiseArray = [];
  return new Promise((resolve) => {
    for(let promise of promiseArray) {
      promise
      .then(x => {innerPromiseArray.push(x);
      if(innerPromiseArray.length === promiseArray.length) {
        resolve(innerPromiseArray)
      }
      })
      .catch(err => console.log(err))
    }
  }
  );
}

const a = Promise.resolve(2);
const b = Promise.resolve(7);
const c = Promise.resolve(9);

promiseAll([a, b, c])
    .then(x => console.log(x))
    .catch(err => console.log(err))