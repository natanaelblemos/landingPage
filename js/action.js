
function pegaEmail(){
    let inputEmail = document.querySelector('#email');
        let contato = inputEmail.value;
        inputEmail.className = '';
        //console.log(contato);
        return contato;
}

function gravaEmail(contato){
    localStorage.setItem('contato',JSON.stringify(contato));
        let inputEmail = document.querySelector('#email');
        inputEmail.value = '';
    if(contato.match(/@/)){
        let contatos =JSON.parse(localStorage.getItem('contato'));
        inputEmail.className = '';
        console.log(contatos);
    }else{
        alert('Este email não é válido!');
        inputEmail.className = 'inputErro';
    }

     
}
