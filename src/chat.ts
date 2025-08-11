import './style.css'







// window.addEventListener('DOMContentLoaded', ()=> {
    
   

 let all_users = document.querySelector('#all_users') as HTMLDivElement

let info_about_user = document.querySelectorAll('#users_table tr td:last-child')
console.log(info_about_user);


async function showUsers() {
 try {
   let users = await fetch('https://jsonplaceholder.typicode.com/users')
   let user = await users.json()

 
   for (let i = 0; i < user.length; i++) {
      all_users.innerHTML += `<div>${user[i].name}</div>`
   }

let users_name = all_users.children 
  for (let i = 0; i < users_name.length; i++) {
    users_name[i].addEventListener('click', (e:any)=> {
      console.log(e.target.innerHTML);


info_about_user[0].innerHTML = user[i].name
info_about_user[1].innerHTML = user[i].username
info_about_user[2].innerHTML = user[i].address.city, ', ', user[i].address.street
info_about_user[3].innerHTML = user[i].email
info_about_user[4].innerHTML = user[i].phone
info_about_user[5].innerHTML = user[i].website
    })
}







 } catch (error) {
  all_users.innerHTML = 'Произошла ошибка при загрузке данных'
 }
}
showUsers()


// x-api-key: reqres-free-v1




let mass = ['name', 'username']
console.log(mass[0]);





//!!!!!!!!!!!!!!!!!! задание с поездом!!!!!!!!!!!!!!!!!!!!


let seats = document.querySelector('#seats') as HTMLDivElement
let tickets_chart = document.querySelector('#tickets_chart') as HTMLDivElement
let book = document.querySelector('#book') as HTMLInputElement
let total = document.querySelector('#total') as HTMLDivElement

// let passangers_info = document.querySelector('#passangers_info') as HTMLDivElement

// console.log(passangers_info);


// let totalAcc = 60 as any
// let totalAcc = 0 as any

// seats.addEventListener('click', (e)=> {
  
//     for (let i = 0; i < tickets_input.length; i++) {
//       if (tickets_input[i].checked == true) {
//         totalAcc+=1
//           console.log(totalAcc);
          
//         }
//         totalAcc=0  
//     }
  
// })




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
 

  


let directions = document.querySelector('#directions') as HTMLSelectElement

//!
let totalAcc = 0 as any

book.addEventListener('click', (e)=> {
  e.preventDefault()
  
for (let i = 0; i < tickets_input.length; i++) {
      if (tickets_input[i].checked == true) {
  tickets_chart.innerHTML+= `<div>
  <div>${directions.value}</div>
  <div>${data.value}</div>
  <div>${tickets_input[i].name}</div>
  </div>`
  
} 

}})

