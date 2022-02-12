// BUSINESS LAYER

const productDao = require('../dao/productDao');
const pageLimit = require('../constants/pageLimit');

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

  getPage: async (page) => {
    const dataFetched = await productDao.getPage(page);

    const productsMapped = mapDataToProducts(dataFetched);

    return productsMapped;
  },

  getTotalPages: (products) => {
     return  Math.ceil(products.length/pageLimit.limit)-1;
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
