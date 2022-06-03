function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
   const promise=  new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve()

    } else {
      reject(onError({ position, delay }))
    }
   })
  return promise
}
const shouldResolve = Math.random() > 0.3;
   const promise=  new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve()

    } else {
      reject(onError({ position, delay }))
    }
   })


//   .then(({ position, delay }) => {
    
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
function Success({ position, delay }) {
     return  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
  
promise.then(Success(createPromise(2, 1500)))