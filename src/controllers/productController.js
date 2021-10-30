const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const isNull = (product) => {
 return product === null;
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
  return products.filter(product => product.category.includes("RECOMENDED"));
}

const getOffer = () => {
  return products.filter(product => product.category.includes("OFFER"));
}

const productController = {
  /* Catalogo todos los productos */
  catalog: (req, res) => {
    const offer = getOffer();
    const recomended = getRecomended();
    res.render("catalog", { 'offerProducts': offer, 'recomendedProducts': recomended });
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    res.render("carrito");
  },

  /* Detalle de un producto  */
  detail: (req, res) => {
    const productToShow = getById(req.params.id);
    if(isNull(productToShow)) {
      res.redirect('/notFound');
    } else {
      res.render("detail", { 'productToShow': productToShow })
    }
  },

  /* Formulario de creacion de producto */
  create: (req, res) => {
    res.render("crearProductoForm");
  },

  /* Creacion producto: Metodo para guardar */
  save: (req, res) => {
    addProduct(req.body.product);
    res.redirect('index');
  },

  /* Formulario de edicion de producto */
  edit: (req, res) => {
    const productToEdit = getById(req.params.id);
    if(isNull(productToEdit)) {
      res.redirect('/notFound');
    } else {
      res.render("editarProductoForm", {'productToEdit': productToEdit});
    }
  },

  /* Actualizar producto: metodo para editar */
  update: (req, res) => {
    const updatedProduct = req.body.product;
		deleteByID(updatedProduct.id);
		addProduct(updatedProduct);
    res.redirect('/index');
  },
};

module.exports = productController;
