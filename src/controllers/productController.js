const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");
const categoryProductsService = require('../services/categoryProductsService');
const { validationResult } = require("express-validator");
const formatterService = require ('../services/formatterService');
const db = require('../../database/models');
let productModel = db.Product;

const productController = {
  index: async (req, res) => {
    try {
      const offerProducts = await productsService.getOffer();
      const recommendedProducts = await productsService.getRecommended();
      
      res.render("index", {
        offerProducts,
        recommendedProducts,
        userLogged: req.session.userLogged,
      });
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar la home\n", e);
    }
  },

  /* Catalogo todos los productos */
  catalog: async (req, res) => {
    try {
      const products = await productsService.getProducts();
      res.render("catalog", { products, userLogged: req.session.userLogged });
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar el catalogo de productos\n", e);
    }
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    res.render("carrito", { carrito: productsService.getCarrito(), userLogged: req.session.userLogged });
  },

  /* Detalle de un producto  */
  detail: (req, res) => {
    const productToShow = productsService.getById(req.params.id);
    if (validatorService.isNullOrUndefined(productToShow)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("detail", { productToShow, userLogged: req.session.userLogged });
    }
  },

  /* Formulario de creacion de producto */
  create: async (req, res) => {
    try {
      const errors = null;
      const data = null;
      const category = await categoryProductsService.getCategories();

      res.render("crearProductoForm", {
        category,
        errors,
        data,
        userLogged: req.session.userLogged
      });
    } catch(e) {
      //TODO: Agregar mensaje de error
      console.log("", e);
    }
  },

  /* Creacion producto: Metodo para guardar */
  save: async (req, res) => {

    let errors = validationResult(req);

    if (errors.isEmpty()) {
      productModel.create(
        {
          name: req.body.name,
          price: req.body.price,
          discount: req.body.discount ? req.body.discount : 0,
          description: req.body.description,
          image: req.file ? req.file.filename : "",
          alt: req.body.alt,
          ingredients: req.body.ingredients,
          cooking: req.body.cooking,
          nutritional_info: req.body.nutritional_info,
          categoryProduct_id: req.body.category
        }
    )
    .then(()=> {
        return res.redirect('/')})            
    .catch(error => res.send(error))
    } else {
      try {
        const category = await categoryProductsService.getCategories();

        res.render("crearProductoForm", {
          category,
          errors: errors.mapped(),
          data: req.data,
          userLogged: req.session.userLogged
        })
      } catch(e) {
        console.log(e);
      }
    }
  },

  /* Formulario de edicion de producto */
  edit: (req, res) => {
    let errors = null;
    const productToEdit = productsService.getById(req.params.id);

    if (validatorService.isNullOrUndefined(productToEdit)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("editarProductoForm", {
        productToEdit,
        category: productsService.getCategoryOptions(), 
        userLogged: req.session.userLogged,
        errors
      });
    }
  },

  /* Actualizar producto: metodo para editar */
  update: (req, res) => {
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
      const requestedId = Number(req.params.id);
      const oldProduct = productsService.getById(requestedId);
      
      const updatedProduct = {
        ...oldProduct,
        ...req.body,
      };
      
      productsService.deleteByID(requestedId);
      productsService.addProduct(updatedProduct);
      productsService.persistProducts();
      
      res.redirect("/");
    } else {
      let productToEdit = {id: req.params.id, ...req.body};
      
      res.render("editarProductoForm", {
        productToEdit,
        category: productsService.getCategoryOptions(),
        userLogged: req.session.userLogged,
        errors: errors.mapped()
      });
    }
  },

  notFound: (req, res) => {
    const descriptionError =
      "The product with id " + req.params.id + " doesn't exists";
    res.render("notFound", { descriptionError });
  },

  search: (req, res) => {
    const valueSearch = req.query.valueSearch;
    const filterProducts = productsService.getProductsByString(valueSearch);
    res.render("catalog", { products: filterProducts, userLogged: req.session.userLogged });
  },

  carritoDelete: (req, res) => {
    productsService.deleteByIDCarrito(req.params.id);
    productsService.persistProductsCarrito();

    res.redirect("/products/carrito");
  },

  delete: (req, res) => {
    productsService.deleteByID(req.params.id);
    productsService.persistProducts();

    res.redirect("/products/catalog");
  },
};

module.exports = productController;
