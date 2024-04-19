let correo= document.querySelector('#email')

function validar(){
    let nombre= document.querySelector('#nombre').value
    if(nombre.length > 30){
        window.alert("El nombre es muy largo");
    }else if(correoValido() == 1){
        window.alert("El correo es invalido porfavor vuelva a introducirlo")
    }
}

function correoValido(){
    let regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-6}$/;
    texto= correo.value;
    if(!regex.test(texto)){
        return 1;
    } else if(regex.test(texto)){
        return 0;
    }
}