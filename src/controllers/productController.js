const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const category = require("../data/constants/constants");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const isNullOrUndefined = (product) => {
  return product === null || product === undefined;
};

const getById = (id) => {
  const product = products.find((p) => p.id == id);
  return product;
};

const addProduct = (product) => {
  products.push(product);
};

const deleteByID = (id) => {
  products = products.filter((p) => p.id != id);
};

const getRecomended = () => {
  return products.filter((product) =>
    product.category.includes(category.recomended)
  );
};

const getOffer = () => {
  return products.filter((product) =>
    product.category.includes(category.offer)
  );
};

const getNextId = () => {
  const ids = products.map((product) => product.id);
  return Math.max(...ids) + 1;
};

const productController = {
  index: (req, res) => {
    res.render("index", {
      offerProducts: getOffer(),
      recomendedProducts: getRecomended(),
    });
  },

  /* Catalogo todos los productos */
  catalog: (req, res) => {
    res.render("catalog", { products });
  },

  /* Carrito de compra */
  carrito: (req, res) => {
    res.render("carrito");
  },

  /* Detalle de un producto  */
  detail: (req, res) => {
    const productToShow = getById(req.params.id);
    if (isNullOrUndefined(productToShow)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("detail", { productToShow });
    }
  },

  /* Formulario de creacion de producto */
  create: (req, res) => {
    res.render("crearProductoForm", { category });
  },

  /* Creacion producto: Metodo para guardar */
  save: (req, res) => {
    const newProduct = {
      id: getNextId(),
      ...req.body,
      image: req.file ? req.file.filename : "",
    };
    // Modificar el arreglo para agregar el nuevo producto
    const newProductList = [...products, newProduct];

    // Escribir en el JSON el nuevo arreglo actualizado
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(newProductList, null, " ")
    );

    addProduct(newProduct);

    res.redirect("/");
  },

  /* Formulario de edicion de producto */
  edit: (req, res) => {
    const productToEdit = getById(req.params.id);
    if (isNullOrUndefined(productToEdit)) {
      res.redirect("/products/" + req.params.id + "/notFound");
    } else {
      res.render("editarProductoForm", { productToEdit });
    }
  },

  /* Actualizar producto: metodo para editar */
  update: (req, res) => {
    const requestedId = Number(req.params.id);
    //console.log(req.body);

    const oldProduct = getById(requestedId);
    const updatedProduct = {
      //id: requestedId,
      ...oldProduct,
      //...req.body,
    };

    console.log(updatedProduct);
    //deleteByID(updatedProduct.id);
    //addProduct(updatedProduct);
    //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    //res.redirect('/');
  },

  notFound: (req, res) => {
    const descriptionError =
      "The product with id " + req.params.id + " doesn't exists";
    res.render("notFound", { descriptionError });
  },
};

module.exports = productController;
