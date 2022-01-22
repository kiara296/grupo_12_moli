window.addEventListener('load', ()=> {
    
    let errores = [];

    let name = document.querySelector('#name');
    let lastname = document.querySelector('#lastname');
    let user = document.querySelector('#user');
    let profileImage = document.querySelector('#profileImage');
    let password = document.querySelector('#password');
    let pass_confirm = document.querySelector('#pass_confirm');
    name.focus();

    let formulario = document.querySelector('#form');

    name.addEventListener('blur', function(e) {
        if(e.target.value == '') {
            document.querySelector('#error-name').innerHTML = '&nbsp; &nbsp; &nbsp; * El nombre es obligatorio'
        }
    });

    

    /* formulario.addEventListener('submit', function(e){
        e.preventDefault();

        if (name.value == '') {
            document.querySelector('#error-name').innerHTML += 'El nombre es obligatorio'
            errores.push('El nombre es obligatorio')
        }

        if(name.value.length < 5) {
            errores.push('El nombre debe tener al menos 5 caracteres')
        }
        
        console.log(errores);

    }); */
});
/* if (lastname.value == ''){
    errores.push('El apellido es obligatorio');
}


if (user.value == ''){
    errores.push('El email es obligatorio')
}


if (profileImage.value == ''){
    errores.push('La imagen es obligatoria');
}


if (password.value == ''){
    errores.push('La contraseña es obligatoria');
}


if (pass_confirm.value == ''){
    errores.push('Repetir contraseña');
} */



/* if(errores.length > 0){
    let ulErrores = document.querySelector('.errores')
    ulErrores.innerHTML = ''
    errores.forEach(errores => {
        ulErrores.innerHtml += '<li>'+ errores[i] +'</li>'
    })
} */