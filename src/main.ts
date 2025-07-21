import './style.css'


let entrance = document.querySelector('#entrance') as HTMLInputElement //! кнопка входа
let overlay = document.querySelector('#overlay') as HTMLDivElement //! подложка
let cross = document.querySelector('#cross') as HTMLButtonElement //! кнопка закрытия формы
let registration = document.querySelector('#registration') as HTMLDivElement
let form_entrance = document.querySelector('#form_entrance') as HTMLFormElement //! форма с логином и паролем
let form_registration = document.querySelector('#form_registration') as HTMLFormElement //!регистрация пользователя


let registration_button = document.querySelector('.registration_button') as HTMLDivElement
let enter_password = document.querySelector('#enter_password') as HTMLDivElement //!div всплывает при неверных паролях
let wrong_password = document.querySelector('#wrong_password') as HTMLDivElement //!div всплывает при неверных паролях
let enter_mail = document.querySelector('#enter_mail') as HTMLDivElement //!div всплывает при неверных паролях
let user_info_form = document.querySelector('#user_info_form') as HTMLFormElement //! Пользовательская инфа
let user_info_button = document.querySelector('#user_info_button') as HTMLButtonElement //! Отправка пользовательской инфы

let info_about_user_form = document.querySelector('#info_about_user_form') as HTMLDivElement //! Отправка пользовательской инфы
let show_email = document.querySelector('#show_email') as HTMLDivElement //! Пишем почту на форме




entrance.addEventListener('click',()=> {
    form_registration.style.display='none'
    form_entrance.style.display='block'
    user_info_form.style.display = 'none'
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
  if (e.target.id=='overlay' || e.target.id=='cross') {
    overlay.style.opacity='0'
    setTimeout(() => {
      overlay.style.display='none'
    }, 500);
  } else {
    return
  }
})

registration.addEventListener('click',()=> {
  overlay.style.opacity='0'
    overlay.style.display='block'
    form_registration.style.display='block'
    form_entrance.style.display='none'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);
})


//!Проверка пользователя на введенные данные при регистрации

let inputs = form_registration.getElementsByTagName('input')

registration_button.addEventListener('click', (e)=> {  
 user_info_form.style.display = 'none'


let domains = inputs[0].value
  let minLength = inputs[0].value.indexOf('@');
  console.log(minLength);
    if (inputs[0].value=='') {
    error_mail(e)
      return  enter_mail.innerHTML = 'Введите почту'
  } else if (!domains.includes('@gmail.com') && !domains.includes('@mail.ru')  && !domains.includes('@yandex.ru') ) {
    error_mail(e)
      return enter_mail.innerHTML = 'Неправильно ввели домен'
  } else if (minLength <= 3 ) {
    error_mail(e)
      return enter_mail.innerHTML = 'Недостаточное количество символов'
  } else if (inputs[1].value =='') {
    error_password(e)
      return enter_password.innerHTML = 'Введите пароль'
  } else if (inputs[1].value.length <=6) {
    error_password(e)
      return enter_password.innerHTML = 'Пароль меньше 6 символов'
  // } else if (inputs[1].value.includes('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}@[^@]+$/')) {
    // error_password(e)
      // return enter_password.innerHTML = 'введите заглавную букву'
  } else if (inputs[1].value !=inputs[2].value) {
    wrong_password.style.opacity = '1'
    setTimeout(() => {
      wrong_password.style.opacity = '0'
    }, 1000);
    e.preventDefault()
  }
  
  e.preventDefault()
  document.cookie = (`${inputs[0].value} : ${inputs[1].value}; max-age=15`)
  show_email.innerHTML = document.cookie
  

})


function error_mail (e:any) {
  enter_mail.style.opacity = '1'
    setTimeout(() => {
      enter_mail.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}

function error_password (e:any) {
  enter_password.style.opacity = '1'
  setTimeout(() => {
      enter_password.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}


  




info_about_user_form.addEventListener('click', ()=> {
console.log(123);
    form_registration.style.display='none'
    form_entrance.style.display='none'
    user_info_form.style.display = 'flex'
    overlay.style.opacity='0'
    overlay.style.display='block'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);
})




























// let acc = 0
// let acc2 = 0
// let acc3 = 0


// function testFunc(str:any) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i]>'a' && str[i]<'z') {
//       acc++
//       if(acc>0) wrong_password.innerHTML = ('Введите букву')
//     } else if(str[i]>'A' && str[i]<'Z'){
//       acc2++
//       wrong_password.innerHTML = ('Введите букву 2')
//     } else if (str[i]>0 && str[i]<9) {
//       acc3++
//       wrong_password.innerHTML = ('Введите цифру')
//       console.log(acc3);
//     }    
//   }
// }

// testFunc(inputs[0].value)


  // let correctPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}@[^@]+$/





document.body.addEventListener('click', (e)=> {
  console.log(e.target);
  
})
































// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!








