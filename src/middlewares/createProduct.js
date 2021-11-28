const { check } = require("express-validator");

const validations = [
    check("name").notEmpty().withMessage("* Nombre requerido"),
    check("price").notEmpty().withMessage("* Precio requerido"),
    check("ingredientes").notEmpty().withMessage("* Ingredientes requeridos"),
    check("infoNutricional").notEmpty().withMessage("* Informacion nutricional requerida"),
    check("alt").notEmpty().withMessage("* Texto alternativo requerido")
];
  
  module.exports = validations;