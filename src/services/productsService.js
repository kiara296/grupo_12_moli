// business layer

const fs = require("fs");
const path = require("path");
const category = require("../data/constants/constants");
const formatterService = require("./formatterService");
let db = require('../../database/models');

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
const carritoFilePath = path.join(__dirname, "../data/carritoDatos.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
let carrito = JSON.parse(fs.readFileSync(carritoFilePath, "utf-8"));

const productsService = {
  getById: (id) => {
    const product = products.find((p) => p.id == id);
    return product;
  },

  addProduct: (product) => {
    products.push(product);
  },

  deleteByID: (id) => {
    products = products.filter((p) => p.id != id);
  },

  deleteByIDCarrito: (id) => {
    carrito = carrito.filter((p) => p.id != id);
  },

  getRecomended: () => {
    /* return products.filter((product) =>
      product.category.includes(category.recommended)
    ); */
  },

  getOffer: () => {
    /* return products.filter((product) =>
      product.category.includes(category.offer)
    ); */
  },

  getNextId: () => {
    const ids = products.map((product) => product.id);
    return Math.max(...ids) + 1;
  },

  updateProducts: () => {
    products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  },

  persistProductsCarrito: () => {
    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito, null, " "));
  },

  persistProducts: () => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
  },

  getProducts: () => {
  //let formatterPriceProducts= [...products]; 
  // formatterPriceProducts.forEach (p=> p.price= formatterService.toThousand (p.price))
 // console.log(products);    
    //updateProducts();
    /* db.Product.findAll().then((products) => {
      console.log(products);
    }) */
    db.Product.findAll({
      /* include: [{ association: "product_category" }] */
    })
      .then((products) => 
        console.log(products))
      .catch((e) => {
        console.log(e)
      });

    return products;
  },

  getCategoryOptions: () => {
    return category;
  },

  getCarrito: () => {
    return carrito;
  },

  persist: (newProduct) => {
    const newProductList = [...products, newProduct];

    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(newProductList, null, " ")
    );
  },

  getProductsByString: (valueString) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(valueString.toLowerCase()) ||
        product.description.toLowerCase().includes(valueString.toLowerCase())
    );
  },
};

module.exports = productsService;
