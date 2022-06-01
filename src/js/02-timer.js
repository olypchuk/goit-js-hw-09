import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
require("flatpickr/dist/themes/material_blue.css");

const refs = {
  days : document.querySelector('[data-days]'),
  hours : document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input : document.querySelector("#datetime-picker"),
  startBtn :document.querySelector('[data-start]')
}
let res = null;
let formData;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
      if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure("Please choose a date in the future")
      } else {
        refs.startBtn.removeAttribute("disabled");
  
        res=selectedDates[0]-options.defaultDate
      }

  },
};


const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {

        const currentTime = Date.now() - startTime;

        formData = convertMs(res - currentTime);

        upgradeRes(formData)
     
       }, 1000)
    }
}


function upgradeRes({ days, hours, minutes, seconds }  ) {
    refs.seconds.textContent = seconds;
    refs.minutes.textContent = minutes;
    refs.hours.textContent = hours;
    refs.days.textContent=days
    
}
refs.startBtn.addEventListener("click",timer.start)


flatpickr(refs.input,options)


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2,'0')
}

