const productsService = require("../services/productsService");
const validatorService = require("../services/validatorService");
const categoryProductsService = require('../services/categoryProductsService');
const { validationResult } = require("express-validator");
const validations = require("../middlewares/validateProductForm");
const db = require("../../database/models");

const productController = {
  index: async (req, res) => {
    const valueSearch = '';
    try {
      const offerProducts = await productsService.getOffer();
      const recommendedProducts = await productsService.getRecommended();
      
      res.render("index", {
        offerProducts,
        recommendedProducts,
        userLogged: req.session.userLogged,
        valueSearch
      },
      );
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar la home\n", e);
    }
  },

  /* Catalogo todos los productos */
  catalog: async (req, res) => {
    const valueSearch = '';
    try {
      const products = await productsService.getProducts();
      res.render("catalog", { products, userLogged: req.session.userLogged, valueSearch });
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar el catalogo de productos\n", e);
    }
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    const valueSearch = '';
    res.render("carrito", { carrito: productsService.getCarrito(), userLogged: req.session.userLogged, valueSearch });
  },

  /* Detalle de un producto  */
  detail: async (req, res) => {
    const valueSearch = '';
    try {
      const productToShow = await productsService.getById(req.params.id);
      if (validatorService.isNullOrUndefined(productToShow)) {
        res.redirect("/products/" + req.params.id + "/notFound");
      } else {
        res.render("detail", { productToShow, userLogged: req.session.userLogged, valueSearch });
      }
    } catch(e) {
      console.log(e);
    }
  },

  /* Formulario de creacion de producto */
  create: async (req, res) => {
    const valueSearch = '';
    try {
      const errors = null;
      const data = null;
      const category = await categoryProductsService.getCategories();

      res.render("crearProductoForm", {
        category,
        errors,
        data,
        userLogged: req.session.userLogged,
        valueSearch
      });
    } catch(e) {
      console.log("", e);
    }
  },

  /* Creacion producto: Metodo para guardar */
  save: async (req, res) => {
    let errors = validationResult(req);
    const valueSearch = '';

    if (errors.isEmpty()) {
      try {
        productsService.create(req.body);
        return res.redirect( '/');
      } catch(e) {
        console.log(e);
      } 
    } else {
      try {
        const category = await categoryProductsService.getCategories();
        res.render("crearProductoForm", {
          category,
          errors: errors.mapped(),
          data: req.data,
          userLogged: req.session.userLogged,
          valueSearch
        })
      } catch(e) {
        console.log(e);
      }
      
    }
  },

  /* Formulario de edicion de producto */

  edit: async(req,res) => {
    const valueSearch = null;
    try{
      const errors = null;
      const data = null;
      
      const productToEdit = await productsService.getById(req.params.id);
      const category =  await categoryProductsService.getCategories();
     
      res.render("editarProductoForm", {
        productToEdit,
        category,
        errors,
        data,
        userLogged: req.session.userLogged,
        valueSearch
      })
    } catch(e) {
      console.log("", e);
    }

  },
    
    
    
   /*Promise
    .all([promProduct, promCategory])
    .then(([productToEdit, allCategories]) => {
      res.render("editarProductoForm", {
        productToEdit,
        allCategories,
        errors,
        userLogged: req.session.userLogged,
        valueSearch
      })
    })
    .catch(error => res.send(error))
   
  },  */ 
   /* edit: (req, res) => {
    const valueSearch = '';
    let errors = null;
    const productToEdit = productsService.getById(req.params.id);

    if (validatorService.isNullOrUndefined(productToEdit)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("editarProductoForm", {
        productToEdit,
        category: productsService.getCategoryOptions(), 
        userLogged: req.session.userLogged,
        errors,
        valueSearch
      });
    }
  }, */
 
  /* Actualizar producto: metodo para editar */
  update: function (req,res) {
    console.log(req.body)
    let errors = validationResult(req);
    const data = null;
    const valueSearch = null;
    let productId = req.params.id;
    
    if (errors.isEmpty()) {
      db.Product.update(
        {
          name: req.body.name,
          price: req.body.price,
          discount: req.body.discount ? req.body.discount : 0,
          description: req.body.description,
          image: req.file ? req.file.filename : req.body.oldImage,
          alt: req.body.alt,
          ingredients: req.body.ingredients,
          cooking: req.body.cooking,
          nutritional_info: req.body.nutritional_info,
          categoryProduct_id: req.body.category
        },
        {
            where: {id: productId}
        })
        .then(()=> {
          return res.redirect("/")})   
          .catch(error => res.send(error))
    } else {
      let productToEdit = {id: req.params.id, ...req.body};
      categoryProductsService.getCategories().then((category)=>{
        res.render("editarProductoForm", {
          productToEdit,
          category,
          userLogged: req.session.userLogged,
          errors: errors.mapped(),
          valueSearch,
          data
        })
      });
      ;
    }
  }, 
    
/*   update: (req, res) => {
    const valueSearch = '';
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
        errors: errors.mapped(),
        valueSearch
      });
    }
  }, */

  notFound: (req, res) => {
    const descriptionError =
      "The product with id " + req.params.id + " doesn't exists";
    res.render("notFound", { descriptionError });
  },

  search: async (req, res) => {
    const valueSearch = req.query.valueSearch;
    try {
      const products = await productsService.search(valueSearch);
      res.render("catalog", { products, userLogged: req.session.userLogged, valueSearch });
    } catch(e) {
      console.log(e);
    }
  },

  carritoDelete: (req, res) => {
    productsService.deleteByIdCarrito(req.params.id);
    res.redirect("/products/carrito");
  },

  delete: async (req, res) => {
    try {
      await productsService.delete(req.params.id);
    } catch(e) {
      console.log(e);
    }
    res.redirect("/products/catalog");
  },

  admin: async (req, res) => {
    const valueSearch = '';
    try {
      const products = await productsService.getProducts();
      res.render("productAdmin", { products, userLogged: req.session.userLogged, valueSearch });
    } catch(e) {
      console.log("\nOcurrio un error al intentar cargar el catalogo de productos\n", e);
    }
  },
};

module.exports = productController;
