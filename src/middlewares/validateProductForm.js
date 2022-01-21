const { check } = require("express-validator");
const path = require('path')

const validations = [
    check("name").trim().notEmpty().withMessage("* Nombre requerido").isLength({min:5}).withMessage("*Debe tener al menos 5 caracteres"),
    check("price").trim().notEmpty().withMessage("* Precio requerido"),
    check("ingredients").trim().notEmpty().withMessage("* Ingredientes requeridos"),
    check("description").trim().notEmpty().withMessage("* Descripción requerida").isLength({min:20}).withMessage("*Debe tener al menos 20 caracteres"),
    check('fileImage').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

      if (!file) {
          throw new Error('Tenes que subir una imagen');
      } else {
          let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`El formato de la imagen no es valido, subir ${acceptedExtensions.join(', ')}`);
      }
  };
      return true;}),
    check("nutritional_info").trim().notEmpty().withMessage("* Informacion nutricional requerida"),
    check("alt").trim().notEmpty().withMessage("* Texto alternativo requerido")
];
  
  module.exports = validations;