
// SERVICE OBJECT PATTERN (business layer)

const fs = require("fs");
let db = require('../../database/models');
const productDao = require('../dao/productDao');

const productsService = {
  getById: (id) => {
    db.Product.findByPk(id)
      .then((product) => {
       // console.log(product);
      })
      .catch((e) => {
        console.log(e);
      });

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
  

  getOffer: async() => {
    const dataFetched = await productDao.getOffer();

    const productsMapped = dataFetched.map(p => {
      return {...p.dataValues, product_category: p.product_category.dataValues.name}
    });

    return productsMapped;
  },

  getRecommended: async () => {
    const dataFetched = await productDao.getRecommended();

    const productsMapped = dataFetched.map(p => {
      return {...p.dataValues, product_category: p.product_category.dataValues.name}
    });

    return productsMapped;
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

  getProducts: async () => {
    const dataFetched = await productDao.getProducts();

    const productsMapped = dataFetched.map(p => {
      return {...p.dataValues, product_category: p.product_category.dataValues.name}
    });

    return productsMapped;
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

const mapDataToProducts = (data) => {
return data.map(p => {
  return {...p.dataValues, product_category: p.product_category.dataValues.name}
});
}

module.exports = productsService;
