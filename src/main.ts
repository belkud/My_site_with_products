import './style.css'


let entrance = document.querySelector('#entrance') as HTMLDivElement
let overlay = document.querySelector('#overlay') as HTMLDivElement
// let userId = document.querySelector('#userId') as HTMLFormElement
let cross = document.querySelector('#cross') as HTMLButtonElement

entrance.addEventListener('click',()=> {
  overlay.style.display='block'
})

cross.addEventListener('click',()=> {
  overlay.style.display='none'
})

overlay.addEventListener('click',(e:any)=> {
  console.log(e.target.id);
  
  if (e.target.id=='userId' || e.target.id=='') {
    return
  } else {
    overlay.style.display='none'
  }
})
