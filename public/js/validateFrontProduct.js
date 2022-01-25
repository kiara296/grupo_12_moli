window.addEventListener("load", () => {
  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let ingredients = document.querySelector("#ingredients");
  let description = document.querySelector("#description");
  let nutritional_info = document.querySelector("#nutritional_info");
  let fileImage = document.querySelector("#fileImage");
  let alt = document.querySelector("#alt");
  name.focus();

  let formulario = document.querySelector("#form");

  let errores = document.querySelectorAll('.spanErrors')

  console.log(errores)

/*   let hayErrores = function (){
    for (i=0; i < errores.length; i++) {
      if(errores[i].value == '' ){
        return true
      }
    }}

    console.log(errores)

    formulario.addEventListener("submit", function (evento) {
        if(!hayErrores){
        evento.preventDefault();
        } else {
        formulario.submit();
      }
    }); */

   

    formulario.addEventListener("submit", function (evento) {
    if (!validaciones(evento)) {
      evento.preventDefault();
    } else {
      formulario.submit();
    }

    function validaciones(evento) {
      if (name.value == "") {
        document.querySelector("#error-name").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El nombre es obligatorio";
      }else if (name.value.length >= 1 && name.value.length < 5) {
        document.querySelector("#error-name").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
      }
      if (price.value == "") {
        document.querySelector("#error-price").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El precio es obligatorio";
      }
      if (ingredients.value == "") {
        document.querySelector("#error-ingredients").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Los ingredientes son obligatorios.";
      } 
      if (ingredients.value.length >= 1 && ingredients.value.length < 5) {
        document.querySelector("#error-ingredients").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
      }
      if (description.value == "") {
        document.querySelector("#error-description").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La descripcion es obligatoria.";
      }
      if (description.value.length >= 1 && description.value.length < 20) {
        document.querySelector("#error-description").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Debe tener al menos 20 caracteres.";
      }
      if (nutritional_info.value == "") {
        document.querySelector("#error-nutritional_info").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La informacion nutricional es obligatoria";
      }
      if (nutritional_info.value.length >= 1 && nutritional_info.value.length < 20) {
        document.querySelector("#error-nutritional_info").innerHTML =
          "&nbsp; &nbsp; &nbsp; * Debe tener al menos 20 caracteres.";
      }
      if (fileImage.value == "") {
        document.querySelector("#error-fileImage").innerHTML =
          "&nbsp; &nbsp; &nbsp; * La imagen es obligatoria";
      } 
      if (!/\.(jpg|png|gif)$/i.test(fileImage.value)) {
        document.querySelector("#error-fileImage").innerHTML =
          "&nbsp; &nbsp; &nbsp; *Formato invalido";
      }
      if (alt.value == "") {
        document.querySelector("#error-alt").innerHTML =
          "&nbsp; &nbsp; &nbsp; * El texto alternativo es obligatorio";
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

  price.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-price").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El precio es obligatorio";
    } else {
      document.querySelector("#error-price").innerHTML = "";
    }
  });
  console.log(ingredients.value.length)
  ingredients.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-ingredients").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Los ingredientes son obligatorios";
    } else if (e.target.value.length >= 1 && e.target.value.length < 5) {
      document.querySelector("#error-ingredients").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 5 caracteres.";
    } else {
      document.querySelector("#error-ingredients").innerHTML = "";
    }
  });
  description.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-description").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La descripcion es obligatoria";
    } else if (e.target.value.length >= 1 && e.target.value.length < 20) {
      document.querySelector("#error-description").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 20 caracteres.";
    } else {
      document.querySelector("#error-description").innerHTML = "";
    }
  });

  nutritional_info.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-nutritional_info").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La informacion nutricional es obligatoria";
    } else if (e.target.value.length >= 1 && e.target.value.length < 20) {
      document.querySelector("#error-nutritional_info").innerHTML =
        "&nbsp; &nbsp; &nbsp; * Debe tener al menos 20 caracteres.";
    } else {
      document.querySelector("#error-nutritional_info").innerHTML = "";
    }
  });

  fileImage.addEventListener("change", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-fileImage").innerHTML =
        "&nbsp; &nbsp; &nbsp; * La imagen es obligatoria";
    } else if (!/\.(jpg|png|gif)$/i.test(e.target.value)) {
      document.querySelector("#error-fileImage").innerHTML =
        "&nbsp; &nbsp; &nbsp; *Formato invalido";
    } else {
      document.querySelector("#error-fileImage").innerHTML = "";
    }
  });

  alt.addEventListener("blur", function (e) {
    if (e.target.value == "") {
      document.querySelector("#error-alt").innerHTML =
        "&nbsp; &nbsp; &nbsp; * El texto alternativo es obligatorio";
    } else {
      document.querySelector("#error-alt").innerHTML = "";
    }
  });
});
