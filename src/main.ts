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
  
  if (e.target.id=='userId' || e.target.id=='wrong_password' || e.target.id=='form_registration' || e.target.id=='form_entrance' || e.target.id=='') {
    return
  } else {
    overlay.style.opacity='0'
    setTimeout(() => {
      overlay.style.display='none'
    }, 500);
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

let mass_with_domains = ['@gmail.com', '@outlook.com', '@yahoo.com', 
  '@protonmail.com', '@proton.me', '@mail.ru', '@inbox.ru', '@list.ru', '@bk.ru',
  '@yandex.ru', '@ya.ru', '@zoho.com', '@tutanota.com', '@tuta.io',
  '@icloud.com'
]

 

registration_button.addEventListener('click', (e)=> {  
  for (let i = 0; i < mass_with_domains.length; i++) {
    if (inputs[0].value=='') {
      enter_mail.innerHTML = 'Введите почту'
      error_mail(e)
  } else if (!inputs[0].value.includes(mass_with_domains[i])) {
      enter_mail.innerHTML = 'Неправильно ввели домен'
      error_mail(e)
  } else if (inputs[1].value =='') {
    enter_password.style.opacity = '1'
    setTimeout(() => {
      enter_password.style.opacity = '0'
    }, 1000);
    e.preventDefault()
    
  } else if (inputs[1].value !=inputs[2].value) {
    wrong_password.style.opacity = '1'
    setTimeout(() => {
      wrong_password.style.opacity = '0'
    }, 1000);
    e.preventDefault()
  } else {
  }
    }
})

function error_mail (e:any) {
  enter_mail.style.opacity = '1'
    setTimeout(() => {
      enter_mail.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}




document.body.addEventListener('click', (e)=> {
  console.log(e.target);
  
})
console.log(inputs[0]);