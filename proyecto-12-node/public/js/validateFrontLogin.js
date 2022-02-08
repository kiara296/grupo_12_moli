window.addEventListener("load", () => {
    let email = document.querySelector("#email");
    let pass = document.querySelector("#pass");
    email.focus();
    let reEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let formulario = document.querySelector("#form");
  
    formulario.addEventListener("submit", function (evento) {
      if (!validaciones(evento)) {
        evento.preventDefault();
      } else {
        formulario.submit();
      }
  
      function validaciones() {
                
        if (email.value == "") {
          document.querySelector("#error-email").innerHTML =
            "&nbsp; &nbsp; &nbsp; * El email es obligatorio.";
        }else if (!reEmail.test(email.value)) {
          document.querySelector("#error-email").innerHTML =
            "&nbsp; &nbsp; &nbsp; * El email es invalido";
        }
        if (pass.value == "") {
          document.querySelector("#error-pass").innerHTML =
            "&nbsp; &nbsp; &nbsp; * La contraseña es obligatorio.";
        } else if (!rePassword.test(pass.value)) {
          document.querySelector("#error-pass").innerHTML =
            "&nbsp; &nbsp; &nbsp; * La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número";
        }
        else {
          return true;
        }
      }
    });
    
    email.addEventListener("blur", function (e) {
      let reEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if (e.target.value == "") {
        document.querySelector("#error-email").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El email es obligatorio.";
      } else if (!reEmail.test(e.target.value)) {
        document.querySelector("#error-email").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El email es invalido";
      } else {
        document.querySelector("#error-email").innerHTML = "";
      }
    });
    pass.addEventListener("blur", function (e) {
      let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
      if (e.target.value == "") {
        document.querySelector("#error-pass").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La contraseña es obligatorio.";
      } else if (!rePassword.test(e.target.value)) {
        document.querySelector("#error-pass").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número";
      } else {
        document.querySelector("#error-pass").innerHTML = "";
      }
    });
  

  });
  