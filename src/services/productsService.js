// BUSINESS LAYER

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

  getOffer: async() => {
    const dataFetched = await productDao.getOffer();

    const productsMapped = mapDataToProducts(dataFetched);

    return productsMapped;
  },

  getRecommended: async () => {
    const dataFetched = await productDao.getRecommended();

    const productsMapped = mapDataToProducts(dataFetched);

    return productsMapped;
  },

  getProducts: async () => {
    const dataFetched = await productDao.getProducts();

    const productsMapped = mapDataToProducts(dataFetched);

    return productsMapped;
  },

  create: async (body) => {
    const product = {
      name: body.name,
      price: body.price,
      discount: body.discount ? body.discount : 0,
      description: body.description,
      image: body.file ? body.file.filename : "",
      alt: body.alt,
      ingredients: body.ingredients,
      cooking: body.cooking,
      nutritional_info: body.nutritional_info,
      categoryProduct_id: body.category
    }

    /* console.log(product); */

      await productDao.create(product);
  },

};

const mapDataToProducts = (data) => {
return data.map(p => {
  return {...p.dataValues, product_category: p.product_category.dataValues.name}
});
}

module.exports = productsService;
