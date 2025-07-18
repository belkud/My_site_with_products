import './style.css'


let entrance = document.querySelector('#entrance') as HTMLDivElement
let overlay = document.querySelector('#overlay') as HTMLDivElement
// let userId = document.querySelector('#userId') as HTMLFormElement
let cross = document.querySelector('#cross') as HTMLButtonElement

entrance.addEventListener('click',()=> {
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
  console.log(e.target.id);
  
  if (e.target.id=='userId' || e.target.id=='') {
    return
  } else {
    overlay.style.opacity='0'
    setTimeout(() => {
      overlay.style.display='none'
    }, 500);
  }
})
