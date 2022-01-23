window.addEventListener('load', function() {
    document.querySelector('#name').addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
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
/* }); */
/* if (lastName.value == ''){
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



/* /* if(errores.length > 0){
    let ulErrores = document.querySelector('.errores')
    ulErrores.innerHTML = ''
    errores.forEach(errores => {
        ulErrores.innerHtml += '<li>'+ errores[i] +'</li>'
    })
 */

    
    