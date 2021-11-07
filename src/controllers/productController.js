const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");

const productController = {
  index: (req, res) => {
    productsService.updateProducts();
    res.render("index", {
      offerProducts: productsService.getOffer(),
      recomendedProducts: productsService.getRecomended(),
    });
  },

  /* Catalogo todos los productos */
  catalog: (req, res) => {
    res.render("catalog", { products: productsService.getProducts() });
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    res.render("carrito", { carrito: productsService.getCarrito() });
  },

  /* Detalle de un producto  */
  detail: (req, res) => {
    const productToShow = productsService.getById(req.params.id);
    if (validatorService.isNullOrUndefined(productToShow)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("detail", { productToShow });
    }
  },

  /* Formulario de creacion de producto */
  create: (req, res) => {
    res.render("crearProductoForm", { category: productsService.getCategoryOptions() });
  },

  /* Creacion producto: Metodo para guardar */
  save: (req, res) => {
    const newProduct = {
      id: productsService.getNextId(),
      ...req.body,
      image: req.file ? req.file.filename : "",
    };

    productsService.persist(newProduct);
    productsService.addProduct(newProduct);

    res.redirect("/");
  },

  /* Formulario de edicion de producto */
  edit: (req, res) => {
    const productToEdit = productsService.getById(req.params.id);
    
    if (validatorService.isNullOrUndefined(productToEdit)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("editarProductoForm", {
        productToEdit,
        category: productsService.getCategoryOptions(),
      });
    }
  },

  /* Actualizar producto: metodo para editar */
  update: (req, res) => {
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
  },

  notFound: (req, res) => {
    const descriptionError =
      "The product with id " + req.params.id + " doesn't exists";
    res.render("notFound", { descriptionError });
  },

  search: (req, res) => {
    const valueSearch = req.query.valueSearch;
    const filterProducts = productsService.getProductsByString(valueSearch);
    res.render("catalog", { products: filterProducts });
  },

};

module.exports = productController;
