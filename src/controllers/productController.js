const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");
const { validationResult } = require("express-validator");

const productController = {
  index: (req, res) => {
    productsService.updateProducts();
    res.render("index", {
      offerProducts: productsService.getOffer(),
      recomendedProducts: productsService.getRecomended(),
      userLogged: req.session.userLogged,
    });
  },

  /* Catalogo todos los productos */
  catalog: (req, res) => {
    res.render("catalog", { products: productsService.getProducts(), userLogged: req.session.userLogged });
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
  create: (req, res) => {
    const errors = null;
    const data = null;

    res.render("crearProductoForm", {
      category: productsService.getCategoryOptions(),
      errors,
      data,
      userLogged: req.session.userLogged
    });
  },

  /* Creacion producto: Metodo para guardar */
  save: (req, res) => {
    let errors = validationResult(req);
    console.log(req.session.userLogged);

    if (errors.isEmpty()) {
      const newProduct = {
        id: productsService.getNextId(),
        ...req.body,
        image: req.file ? req.file.filename : "",
      };

      productsService.persist(newProduct);
      productsService.addProduct(newProduct);

      res.redirect("/");
    } else {
      res.render("crearProductoForm", {
        category: productsService.getCategoryOptions(),
        errors: errors.mapped(),
        data: req.data,
        userLogged: req.session.userLogged
      });
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
