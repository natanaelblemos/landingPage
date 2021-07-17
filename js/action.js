
function pegaEmail(){
    let inputEmail = document.querySelector('#email');
        let contato = inputEmail.value;
        //console.log(contato);
        return contato;
}

function gravaEmail(contato){
    localStorage.setItem('contato',JSON.stringify(contato));

    let contatos =JSON.parse(localStorage.getItem('contato'));
         console.log(contatos)
     
}
