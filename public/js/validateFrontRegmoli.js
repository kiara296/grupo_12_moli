window.addEventListener("load", () => {
  let name = document.querySelector("#name");
  let lastname = document.querySelector("#lastname");
  let user = document.querySelector("#user");
  let profileImage = document.querySelector("#profileImage");
  let password = document.querySelector("#password");
  let pass_confirm = document.querySelector("#pass_confirm");
  name.focus();

  let formulario = document.querySelector("#form");
  
  let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let reEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 
  formulario.addEventListener("submit", function (evento) {
    if (!validaciones(evento)) {
      evento.preventDefault();
    } else {
      formulario.submit();
    }
  
    function validaciones(evento) {
      /* validacion nombre */
       if (name.value == "") {
        document.querySelector("#error-name").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El nombre es obligatorio";
      } 
       else if (name.value.length >= 1 && name.value.length < 5) {
      document.querySelector("#error-name").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
      } 

       /* validacion apellido */
      else if (lastname.value == "") {
        document.querySelector("#error-lastname").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El apellido es obligatorio";
      } 
      else if (lastname.value.length >= 1 && lastname.value.length < 5) {
        document.querySelector("#error-lastname").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
      }

      /* validacion email */
      else if (user.value == "") {
        document.querySelector("#error-user").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El email es obligatorio.";
      }
      else if (!reEmail.test(user.value)) {
      document.querySelector("#error-user").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El email es invalido";
      }
      
      /* validacion contraseña */
      else if (password.value == "") {
        errores.push('El contraseña es obligatorio')
        document.querySelector("#error-password").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La contraseña es obligatorio.";
      }

     else if (!rePassword.test(e.target.value)) {
      document.querySelector("#error-password").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número";
      }

      /* validacion confirmacion contraseña */
      

      else if (pass_confirm.value == "") {
        document.querySelector("#error-pass_confirm").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La confirmación de la contraseña no puede estar vacia";
      }
      else if (password.value != pass_confirm.value && pass_confirm != "") {
      document.querySelector("#error-pass_confirm").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Las contraseñas deben ser iguales";
      }


      /* validacion imagen */
      else if (profileImage.value == "") {
        document.querySelector("#error-profileImage").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La imagen es obligatoria";
      } 
      
      else {
        return true;
      } 
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
