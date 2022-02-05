// BUSINESS LAYER

const productDao = require('../dao/productDao');

const productsService = {
  getById: async (id) => {
    const dataFetched = await productDao.getById(id);
    const product = {...dataFetched.dataValues, product_category: dataFetched.product_category.dataValues.name}
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
      image: body.file ? body.file : "",
      alt: body.alt,
      ingredients: body.ingredients,
      cooking: body.cooking,
      nutritional_info: body.nutritional_info,
      categoryProduct_id: body.category
    }

      await productDao.create(product);
  },

  search: async (value) => {
    const dataFetched = await productDao.search(value);
    const products = mapDataToProducts(dataFetched);
    return products;
  },

  delete: async (id) => {
    await productDao.delete(id);
  },
  
  countByCategory: (products) => {
    const offer = lengthByCategory(products, 'OFFER');
    const recommended = lengthByCategory(products, 'RECOMMENDED');
    const others = lengthByCategory(products, 'ALL');

    return {
      countOffer: offer,
      countRecommended: recommended,
      countOthers: others
    }
  },

  getProductsWithUrlDetail: (products) => {
    return products.map(product => getProductWithUrl(product));
  },
};

const getProductWithUrl = (product) => {
  return {...product, urlDetail: `/api/products/${product.id}/detail`}
}

const lengthByCategory = (products, category) => {
  return products.filter(product => product.product_category == category).length;
}

const mapDataToProducts = (data) => {
  return data.map(p => {
    return {...p.dataValues, product_category: p.product_category.dataValues.name}
  });
}

module.exports = productsService;
