window.addEventListener("load", () => {
  let name = document.querySelector("#name");
  let lastname = document.querySelector("#lastname");
  let user = document.querySelector("#user");
  let profileImage = document.querySelector("#profileImage");
  let password = document.querySelector("#password");
  let pass_confirm = document.querySelector("#pass_confirm");
  name.focus();

  let formulario = document.querySelector("#form");
 
 /* opcion 2 para prevent default */
  /* let errores = document.querySelectorAll('.spanErrors') 
 
  console.log(errores)
  let hayErrores = function (){
    for (i=0; i < errores.length; i++) {
      if(errores[i].innerHTML = '' ){
        return true
      }
    }}

    console.log(errores)

    formulario.addEventListener("submit", function (evento) {
        if(hayErrores){
        evento.preventDefault();
        }else {
        formulario.submit();
      }
    });  */

  
  formulario.addEventListener("submit", function (evento) {
  

    
       if (name.value == "") {
        errores.push('El nombre es obligatorio');
      } 
      if (lastname.value == "") {
        errores.push('El apellido es obligatorio')
      }
      if (user.value == "") {
      
        document.querySelector("#error-user").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El email es obligatorio.";
      }
      if (password.value == "") {
        errores.push('El contraseña es obligatorio')
        document.querySelector("#error-password").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La contraseña es obligatorio.";
      }
      if (pass_confirm.value == "") {
        document.querySelector("#error-pass_confirm").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La confirmación de la contraseña no puede estar vacia";
      }
      if (profileImage.value == "") {
        document.querySelector("#error-profileImage").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La imagen es obligatoria";
      } else {
        return true;
      } 
      let errores = [];
      console.log(errores)

      if (errores.length > 0) {
        evento.preventDefault();
        errores = [];
      } else {
        formulario.submit();
      }
  
  });

 

  name.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-name").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El nombre es obligatorio";
        
    } else if (e.target.value.length >= 1 && e.target.value.length < 5) {
      document.querySelector("#error-name").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
     
    } else {
      document.querySelector("#error-name").innerHTML = "";

    }
  });

  lastname.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      
      document.querySelector("#error-lastname").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El apellido es obligatorio";
    } else if (e.target.value.length >= 1 && e.target.value.length < 5) {
      document.querySelector("#error-lastname").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
    } else {
      document.querySelector("#error-lastname").innerHTML = "";
    }
  });
  user.addEventListener("blur", function (e) {
    let reEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value == "") {
     
      document.querySelector("#error-user").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El email es obligatorio.";
    } else if (!reEmail.test(e.target.value)) {
      document.querySelector("#error-user").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El email es invalido";
    } else {
      document.querySelector("#error-user").innerHTML = "";
    }
  });
  password.addEventListener("blur", function (e) {
    let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (e.target.value == "") {
  
      document.querySelector("#error-password").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La contraseña es obligatorio.";
    } else if (!rePassword.test(e.target.value)) {
      document.querySelector("#error-password").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número";
    } else {
      document.querySelector("#error-password").innerHTML = "";
    }
  });

  pass_confirm.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-pass_confirm").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La confirmación de la contraseña no puede estar vacia";
    } else if (password.value != pass_confirm.value && pass_confirm != "") {
      document.querySelector("#error-pass_confirm").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Las contraseñas deben ser iguales";
    } else {
      document.querySelector("#error-pass_confirm").innerHTML = "";
    }
  });

  profileImage.addEventListener("change", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-profileImage").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La imagen es obligatoria";
    } else if (!/\.(jpg|png|gif)$/i.test(e.target.value)) {
      document.querySelector("#error-profileImage").innerHTML =
        "&nbsp; &nbsp; &nbsp; *Formato invalido";
    } else {
      document.querySelector("#error-profileImage").innerHTML = "";
    }
  });
});
