import Notiflix from 'notiflix';

const form=document.querySelector("form")
 const { delay, step, amount } = form;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve({ position, delay })

    } else {
        reject({ position, delay })
    }
  },delay)
  
  })
}

function onSubmit(e) {
  e.preventDefault()

  for (let i = 0; i <amount.value; i += 1) {
    const timeDelay = +delay.value + +step.value * i
    console.log(timeDelay);
    createPromise(i+1, timeDelay)
   
      .then(({ position, delay }) => {
        return Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        return Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
 
  }
  form.addEventListener("submit",onSubmit)