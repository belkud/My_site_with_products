import './style.css'


let entrance = document.querySelector('#entrance') as HTMLDivElement
let overlay = document.querySelector('#overlay') as HTMLDivElement
let cross = document.querySelector('#cross') as HTMLButtonElement
let button_registration = document.querySelector('#button_registration') as HTMLDivElement
let form_entrance = document.querySelector('#form_entrance') as HTMLFormElement
let form_registration = document.querySelector('#form_registration') as HTMLFormElement



document.addEventListener('DOMContentLoaded', ()=> {

entrance.addEventListener('click',()=> {
    form_registration.style.display='none'
    form_entrance.style.display='block'
    overlay.style.opacity='0'
    overlay.style.display='block'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);
})

cross.addEventListener('click',()=> {
    overlay.style.opacity='0'
    setTimeout(() => {
    overlay.style.display='none'
  }, 500);
})

overlay.addEventListener('click',(e:any)=> {
  // console.log(e.target.id);
  
  if (e.target.id=='userId' || e.target.id=='') {
    return
  } else {
    overlay.style.opacity='0'
    setTimeout(() => {
      overlay.style.display='none'
    }, 500);
  }
})

button_registration.addEventListener('click',()=> {
    overlay.style.opacity='0'
    overlay.style.display='block'
    form_registration.style.display='block'
    form_entrance.style.display='none'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);


})


})




// let test_button = document.querySelector('#test_button') as any
// test_button.addEventListener('click', ()=> {
//   console.log('yyyyyyyyyy');
  
// })






