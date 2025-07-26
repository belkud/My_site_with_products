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
  if (cookArray[i].includes('label')) {
        console.log(cookArray[i]);
        container[i].value = `${cookArray[i].replace(`label[${i}]=`, '')}`  
  }
} 

    
console.log(cookArray);














