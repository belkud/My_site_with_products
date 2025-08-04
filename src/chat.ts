import './style.css'








// window.addEventListener('DOMContentLoaded', ()=> {
    
   

 








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

