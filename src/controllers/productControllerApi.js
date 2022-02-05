const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");
const categoryProductsService = require('../services/categoryProductsService');
const { validationResult } = require("express-validator");
const db = require("../../database/models");

const productControllerApi = {
  
  /* Catalogo todos los productos */
  catalog: async (req, res) => {
    try {
      const products = await productsService.getProducts();
      const productsWithUrlDetail = productsService.getProductsWithUrlDetail(products);
      const countByCategory = productsService.countByCategory(products);

      return res.status(200).json({
      total: products.length,
      countByCategory: countByCategory,
      products: productsWithUrlDetail,
      userLogged: req.session.userLogged,
      valueSearch:undefined,
      status: 200
      })
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar el catalogo de productos\n", e);
    }
  },

    /* Detalle de un producto  */
  detail: async (req, res) => {
    
    try {
      const productToShow = await productsService.getById(req.params.id);
      if (validatorService.isNullOrUndefined(productToShow)) {
        res.redirect("/products/" + req.params.id + "/notFound");
      } else {
       
        return res.status(200).json({
          productToShow: productToShow,
          userLogged: req.session.userLogged,
          status: 200
          })
      }
    } catch(e) {
      console.log(e);
    }
  },

};

module.exports = productControllerApi;
