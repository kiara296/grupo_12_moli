const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const category = require('../data/constants/constants');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const isNullOrUndefined = (product) => {
 return product === null || product === undefined;
}

const getById = (id) => {
  const product = products.find((p) => p.id == id);
  return product;
};

const addProduct = (product) => {
  products.push(product);
}

const deleteByID = (id) => {
	products = products.filter(p => p.id != id);
}

const getRecomended = () => {
  return products.filter(product => product.category.includes(category.recomended));
}

const getOffer = () => {
  return products.filter(product => product.category.includes(category.offer));
}

const productController = {

  index: (req, res) => {
    res.render("index", { 'offerProducts': getOffer(), 'recomendedProducts': getRecomended() });
  },

  /* Catalogo todos los productos */
  catalog: (req, res) => {
    const offer = getOffer();
    const recomended = getRecomended();
    res.render("catalog", { products });
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    res.render("carrito");
  },

  /* Detalle de un producto  */
  detail: (req, res) => {
    const productToShow = getById(req.params.id);
    if(isNullOrUndefined(productToShow)) {
      res.redirect('/products/' + req.params.id + '/notFound');
    } else {
      res.render("detail", { productToShow })
    }
  },

  /* Formulario de creacion de producto */
  create: (req, res) => {
    res.render("crearProductoForm");
  },

  /* Creacion producto: Metodo para guardar */
  save: (req, res) => {
    //addProduct(req.body.product);
    res.redirect('index');
  },

  /* Formulario de edicion de producto */
  edit: (req, res) => {
    const productToEdit = getById(req.params.id);
    if(isNullOrUndefined(productToEdit)) {
      res.redirect('/products/' + req.params.id + '/notFound');
    } else {
      res.render("editarProductoForm", { productToEdit });
    }
  },

  /* Actualizar producto: metodo para editar */
  update: (req, res) => {
    const updatedProduct = req.body.product;
		deleteByID(updatedProduct.id);
		addProduct(updatedProduct);
    res.redirect('/index');
  },

  notFound: (req, res) => {
    const descriptionError = "The product with id " + req.params.id + " doesn't exists";
    res.render("notFound", { descriptionError });
  }
};

module.exports = productController;
