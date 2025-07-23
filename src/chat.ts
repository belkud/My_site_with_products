import './style.css'




console.log(document.cookie);
console.log(document.cookie);

let chat_with_users = document.querySelector('#chat_with_users') as HTMLTextAreaElement

document.body.addEventListener('input', ()=> {
    document.cookie = `${chat_with_users.value};`
})

chat_with_users.value = document.cookie

// console.log(document.cookie);


try {
    'sdfsdfsdf'
    console.log(1);
    
} catch (error) {
    document.body.style.background= 'green'
    console.log(2);
    
}