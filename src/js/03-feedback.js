const throttle = require('lodash.throttle');
let obj;
const form = document.querySelector("form")
  
form.addEventListener("input", throttle(createData, 500));

form.addEventListener("submit", submitForm);

function createData(e) {
    e.preventDefault()
    obj[e.target.name] = e.target.value;
    const json = JSON.stringify(obj);
    localStorage.setItem("feedback-form-state", json)
 
}

function submitForm(e) {
    e.preventDefault();
    valid()
    e.currentTarget.reset()
    localStorage.clear()
    obj={}
}

function valid() {
  if (!obj["email"]||!obj["message"]) {
     alert("Заповніть ,будь ласка,форму")
    } else {
           console.log(obj);  
    }

}

function isValue(obj) {
    if (obj !== '') {
        for (const key in obj)  {
               form[key].value = obj[key]; 
            }  
    }
}

function loadingPage() {
    obj = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (obj) {
       return isValue(obj)
    }
    obj = {}
    
}
loadingPage()

//  checkInput()
// function checkInput() {
//     const savedMsg = localStorage.getItem("feedback-form-state");

//     if (savedMsg) {
//         const mail = JSON.parse(savedMsg)["email"];
//         const msg = JSON.parse(savedMsg)["message"];
//         if (mail) {
//             obj.email = mail;
//             input.value=mail
//         }
//         if (msg) {
//             obj.message = msg;
//              textarea.value=msg
//         }
        
//         console.log(obj);
        
//         const updateObj = JSON.stringify(obj);
//         localStorage.setItem("feedback-form-state", updateObj)
//     }
// }
     
              
          
             