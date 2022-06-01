const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const background=document.querySelector('body')

btnStart.addEventListener("click", changeBackgr);
btnStop.addEventListener("click", stopChange);

let interval = null;

function changeBackgr() {
    interval=setInterval(() => {
         background.style.backgroundColor = getRandomHexColor()
    } , 1000
    )
    diasabledButton()
}
function diasabledButton() {
      btnStart.setAttribute("disabled","")
  }  

function stopChange() {
    clearInterval(interval)
btnStart.removeAttribute("disabled")
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}