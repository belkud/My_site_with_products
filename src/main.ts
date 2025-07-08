import './style.css'


let entrance = document.querySelector('#entrance') as HTMLDivElement
let userId = document.querySelector('#userId') as HTMLFormElement
let cross = document.querySelector('#cross') as HTMLButtonElement

cross.addEventListener('click',()=> {
  userId.style.display='none'
})