const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");
const categoryProductsService = require('../services/categoryProductsService');
const { validationResult } = require("express-validator");
const db = require("../../database/models");

const productControllerApi = {
  
  /* Catalogo todos los productos */
  catalog: async (req, res) => {
    try {
      const pageProducts = await productsService.getPage(req.query.page);
      const allProducts = await productsService.getProducts();
      const productsCount = await productsService.countTotalProducts();
      const productsWithUrlDetail = productsService.getProductsWithUrlDetail(pageProducts);
      const countByCategory = productsService.countByCategory(allProducts);

      return res.status(200).json({
      total: productsCount,
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
