import './style.css'








// window.addEventListener('DOMContentLoaded', ()=> {
    
   

let chat_with_users = document.querySelector('#chat_with_users') as HTMLTextAreaElement

document.body.addEventListener('reload', ()=> {
  // })
    // document.cookie = `${chat_with_users.value};`
    document.cookie = `label2 : ${chat_with_users.value}  ; max-age = 5};`
    chat_with_users.value = document.cookie
})
    




let container = document.querySelectorAll('#container input') as any

container[3].addEventListener('click', ()=> {
  for (let i = 0; i < container.length; i++) {
    document.cookie += `label[${i}]=${container[i].value},  ; max-age = 5`  
  }
})
      
  
let cookArray = document.cookie.split(',')
for (let i = 0; i < container.length-1; i++) {
  // if (cookArray[i].includes('label')) {
  //       console.log(cookArray[i]);
  //       container[i].value = `${cookArray[i].replace(`label[${i}]=`, '')}`  
  // }
} 

    
console.log(cookArray);

























let seats = document.querySelector('#seats') as HTMLDivElement
let tickets_chart = document.querySelector('#tickets_chart') as HTMLDivElement
let book = document.querySelector('#book') as HTMLInputElement

// let passangers_info = document.querySelector('#passangers_info') as HTMLDivElement

// console.log(passangers_info);



for (let i = 0; i < seats.children.length; i++) {
  seats.children[i].innerHTML +=`
      <div>
      <input type="checkbox">
      <label></label>
      </div>
      <div>
        <input type="checkbox">
        <label></label>
        </div>
      <div>
        <input type="checkbox">
        <label></label>
        </div>
      <div>
      <input type="checkbox">
        <label></label>
      </div>
      `
      }




let tickets_label = seats.getElementsByTagName('label')
let tickets_input = seats.getElementsByTagName('input')

for (let i = 0; i < tickets_label.length; i++) {
  
  tickets_input[i].name  = String(i+1)
  tickets_label[i].innerText  = String(i +1)
  
  
  
}

let data = document.querySelector('#data') as HTMLInputElement
data.value = '2025-05-07'

let directions = document.querySelector('#directions') as HTMLSelectElement
 
console.log(data);

book.addEventListener('click', (e)=> {
  e.preventDefault()
  
  for (let i = 0; i < tickets_input.length; i++) {
      if (tickets_input[i].checked == true) {
  tickets_chart.innerHTML+= `<div>
  <div>${directions.value}</div>
  <div>${data.value}</div>
  <div>${tickets_input[i].name}</div>
  </div>`
  // tickets_input[i].remove()
} 
 


          
  }

 

})























