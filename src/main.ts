import './style.css'


let entrance = document.querySelector('#entrance') as HTMLInputElement //! кнопка входа
let overlay = document.querySelector('#overlay') as HTMLDivElement //! подложка
let cross = document.querySelector('#cross') as HTMLButtonElement //! кнопка закрытия формы
let registration = document.querySelector('#registration') as HTMLButtonElement
let form_entrance = document.querySelector('#form_entrance') as HTMLFormElement //! форма с логином и паролем
let form_registration = document.querySelector('#form_registration') as HTMLFormElement //!регистрация пользователя


let registration_button = document.querySelector('.registration_button') as HTMLButtonElement
let enter_password = document.querySelector('#enter_password') as HTMLDivElement //!div всплывает при неверных паролях
let wrong_password = document.querySelector('#wrong_password') as HTMLDivElement //!div всплывает при неверных паролях
let enter_mail = document.querySelector('#enter_mail') as HTMLDivElement //!div всплывает при неверных паролях
let user_info_form = document.querySelector('#user_info_form') as HTMLFormElement //! Пользовательская инфа
let user_info_button = document.querySelector('.user_info_button') as HTMLButtonElement //! Отправка пользовательской инфы

let info_about_user_form = document.querySelector('#info_about_user_form') as HTMLDivElement //! Отправка пользовательской инфы
let show_email = document.querySelector('#show_email') as HTMLDivElement //! Пишем почту на форме
let wrong_name = document.querySelector('#wrong_name') as HTMLDivElement //! Ошибка при неверном имени
let wrong_lastname = document.querySelector('#wrong_lastname') as HTMLDivElement //! Ошибка при неверной фамилии
let wrong_birth = document.querySelector('#wrong_birth') as HTMLDivElement //! Ошибка при неверной дате рождения
let wrong_telephone = document.querySelector('#wrong_telephone') as HTMLDivElement //! ошибка если пол не выбран




entrance.addEventListener('click',()=> { //! обработчик на кнопку 'вход'
    form_registration.style.display='none'
    form_entrance.style.display='block'
    user_info_form.style.display = 'none'
    overlay.style.opacity='0'
    overlay.style.display='block'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);
})

cross.addEventListener('click',()=> { //! закрытие формы (нажатие на крест)
    overlay.style.opacity='0'
    setTimeout(() => {
    overlay.style.display='none'
  }, 500);
})

overlay.addEventListener('click',(e:any)=> { //! закрытие формы (при нажатии на overlay)
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
    user_info_form.style.display = 'none'
    setTimeout(() => {
    overlay.style.opacity='1'
  }, 500);
})




//!Проверка пользователя на введенные данные при входе



// let acc = 0
//     if (str[i]>'a' && str[i]<'z') {
  //       acc++
  //       if(acc>0) wrong_password.innerHTML = ('Введите букву')
  //     } else if(str[i]>'A' && str[i]<'Z'){


let inputs = form_registration.getElementsByTagName('input')

registration_button.addEventListener('click', (e)=> {  
 user_info_form.style.display = 'none'
 user_info_form.style.display = 'none'


let domains = inputs[0].value
  let minLength = inputs[0].value.indexOf('@');
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
  
  form_registration.style.display='none'
  e.preventDefault()
  // document.cookie = (`${inputs[0].value} : ${inputs[1].value}; max-age=100`)
  show_email.innerHTML = `Hello, ${inputs[0].value}`
  

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




//! код заполнения user info
let form_inputs = user_info_form.getElementsByTagName('input')



user_info_form.addEventListener('keydown', (e)=> {
  if (e.key >= '0' && e.key<='9') {
    if (e.target==form_inputs[0]) {
      wrong_name.innerHTML = 'Используйте буквы'
      error_name(e)
    } else if (e.target==form_inputs[1]) {
      wrong_lastname.innerHTML = 'Используйте буквы'
      error_lastname(e)
    } 
  }
})

user_info_button.addEventListener('click', (e)=> {
  if (form_inputs[0].value=='') {
    wrong_name.innerHTML = 'Введите имя'
    error_name(e)
  } else if (form_inputs[1].value=='') {
    wrong_lastname.innerHTML = 'Введите фамилию'
    error_lastname(e)
  } else if (Number(form_inputs[2].value)<=1900) {
    error_birthdate(e)
    wrong_birth.innerHTML='Введите корректную дату'
  }
  // e.preventDefault()
  
  for (let i = 0; i < form_inputs.length-1; i++) {
    document.cookie += `${form_inputs[i].value+ ','} ; max-age=10`
  }
})
    
  

for (let i = 0; i < form_inputs.length-1; i++) {
  for (let j = 1; j <= 4; j++) {
    if (form_inputs[j].value=='undefined') {
      form_inputs[j].value=''
    } 
}
      form_inputs[i].value  = document.cookie.split(',')[i]   
}
    
    console.log(document.cookie);





function error_name (e:any) {
  wrong_name.style.opacity = '1'
  setTimeout(() => {
      wrong_name.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}

function error_lastname (e:any) {
  wrong_lastname.style.opacity = '1'
  setTimeout(() => {
      wrong_lastname.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}

function error_birthdate (e:any) {
  wrong_birth.style.opacity = '1'
  setTimeout(() => {
      wrong_birth.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}




//! условие для ввода пользователем телефонного номера
let telephone_number = document.querySelector('#telephone_number') as HTMLInputElement
telephone_number.addEventListener('keydown',(e:any)=> {
    let numbers = telephone_number.value.length
    if (Number(e.key)<=9) {
        if (numbers>=0 && numbers<=3) {
            telephone_number.value='+7 ('
        } else if(numbers==7) {
            telephone_number.value+= ') '
        } else if(numbers==12 || numbers==15) {
            telephone_number.value+='-'
        }   
    } else if (e.key !='Backspace' && e.key !='Tab') {
        e.preventDefault()
        wrong_telephone.innerHTML='Введите цифры'
        error_telephone(e)
    }
})

function error_telephone (e:any) {
  wrong_telephone.style.opacity = '1'
  setTimeout(() => {
      wrong_telephone.style.opacity = '0'
    }, 1000);
    e.preventDefault()
}








let targetInputs = document.body.getElementsByTagName('input')

for (let i = 0; i < targetInputs.length; i++) {
  targetInputs[i].addEventListener('focus', (e)=> {
    // @ts-ignore
    
    if (e.target.type!='submit' &&  e.target.type!='checkbox') {
      targetInputs[i].style.outline = '2px solid red'
      targetInputs[i].style.background = 'pink'
      console.log(123);
    }
  })

  targetInputs[i].addEventListener('blur', (e)=> {
    // @ts-ignore
    if (e.target.type!='submit' &&  e.target.type!='checkbox') {
      targetInputs[i].style.outline = ''
      targetInputs[i].style.background = ''
    }
  })
  
}










// window.location.href = "chat.html"
// window.location.href = "My_site_with_products/index.html"





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


