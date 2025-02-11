const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('span-required');
const emailRegex = /^[a -zA - Z0-9._-]+@[a -zA - Z0-9._-]+\.[a - zA -z]{2,}$/;

function nameValidate(){
    if(campos[0].value.length < 3)
        {
            console.log('nome deve ter 3 caracteres');
    }
    else 
    {
        console.log('validado');
    }
}



// const form = document.getElementById("#form");
// const nameInput = document.getElementById("#name");
// const emailInput = document.querySelector("#email");
// const telefoneInput = document.querySelector("#telefone");
// const messageTextarea = document.querySelector("#message");

// function nameValidate(){
//     if (nameInput[0].value.length <3){
//         console.log('nome deve ter 3 caracteres')
//     }
//     else{
//         console.log('nome validado')
//     }
// }



// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// if(nameInput.value === ""){
//     alert("Por favor, preencha o seu nome!");
//     return;
// }
// if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
//     alert("Por favor, preencha o seu email");
//     return;
// }
// if(messageTextarea.value === ""){
//     alert("Por favor, escreva uma mensagem");
//     return;
// }
// form.submit();
// });
// function isEmailValid(email){
//     const emailRegex = new RegExp(
//     /^[a -zA - Z0-9._-]+@[a -zA - Z0-9._-]+\.[a - zA -z]{2,}$/

//     );
//     if(emailRegex.test(email)){
//         return true;
//     }

//     return false;
// }