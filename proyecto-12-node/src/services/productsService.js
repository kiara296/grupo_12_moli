// BUSINESS LAYER

const productDao = require('../dao/productDao');
const pageLimit = require('../constants/pageLimit');

const productsService = {
  getById: async (id) => {
    const dataFetched = await productDao.getById(id);
    return {...dataFetched.dataValues, product_category: dataFetched.product_category.dataValues.name}
  },

  getOffer: async() => {
    const dataFetched = await productDao.getOffer();

    return mapDataToProducts(dataFetched);

  },

  getRecommended: async () => {
    const dataFetched = await productDao.getRecommended();

    return mapDataToProducts(dataFetched);
  },

  getPage: async (page) => {
    const dataFetched = await productDao.getPage(page);

    return mapDataToProducts(dataFetched);
  },

  getTotalPages: (products) => {
     return  Math.ceil(products.length/pageLimit.limit)-1;
  },
 
  getProducts: async () => {
    const dataFetched = await productDao.getProducts();

    return mapDataToProducts(dataFetched);
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
    return mapDataToProducts(dataFetched);
  },

  delete: async (id) => {
    await productDao.delete(id);
  },
  
  countByCategory: (products) => {
    const offer = lengthByCategory(products, 'OFFER');
    const recommended = lengthByCategory(products, 'RECOMMENDED');
    const others = lengthByCategory(products, 'ALL');

    return [
     {name: 'Offer', count: offer},
     {name: 'Recommended', count: recommended}, 
     {name: 'Others', count: others} 
    ]
      
    
  },

  getProductsWithUrlDetail: (products) => {
    return products.map(product => getProductWithUrl(product));
  },

  countTotalProducts: async() => {
    return await productDao.countTotalProducts();
  },

  getLastProductCreate: (products) => {
    const idsProducts = products.map(product => product.id);
     const maxId = Math.max(...idsProducts);
    return products.filter(product => product.id == maxId).pop();
  }
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
