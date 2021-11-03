const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render('products', { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // Aca necesitamos recibir un objeto de tipo producto
    // Primero buscamos el producto correspondiente
    const requiredId = req.params.id;

    const requiredProduct = products.find((prod) => {
      /* El primer elemento que devuelva true se guarda como resultado */
      const condition = prod.id == requiredId;
      return condition;
    });

    // Calculo el final price en el controlador para que la vista quede mas limpia
    const finalPrice =
      requiredProduct.price -
      (requiredProduct.price * requiredProduct.discount) / 100;

    const finalPriceInteger = Math.floor(finalPrice);

    res.render('detail', {
      product: requiredProduct,
      finalPrice: finalPriceInteger,
      toThousand
    });
  },

  // Create - Form to create
  create: (req, res) => {
    // Renderizar el formulario de create
    // No necesita parametros
    res.render('product-create-form');
  },

  // Create -  Method to store
  store: (req, res) => {
    // ✓ Acceder a nuestro archivo JSON
    // ✓ Leer los datos y convertirlos en un array para modificarlo
    // Leer los datos que vienen en la request (req.body)
    const newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: req.file ? req.file.filename : ''
    };
    // Modificar el arreglo para agregar el nuevo producto
    const newProductList = [...products, newProduct];

    // Escribir en el JSON el nuevo arreglo actualizado
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(newProductList, null, ' ')
    );

    // res.redirect('index');
    res.redirect('/');
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Solo falta autocompletar los inputs y el action y method del form
    const requiredId = req.params.id;
    const productToEdit = products.find((prod) => {
      /* El primer elemento que devuelva true se guarda como resultado */
      const condition = prod.id == requiredId;
      return condition;
    });

    const isVisited = productToEdit.category === 'visited';
    const isInSale = productToEdit.category === 'in-sale';

    res.render('product-edit-form', { productToEdit, isVisited, isInSale });
  },
  // Update - Method to update
  update: (req, res) => {
    // Leemos el id que viene por url
    const productId = req.params.id;
    // buscamos la posicion del producto que queremos editar
    const productIndex = products.findIndex((p) => p.id == productId);

    // Generamos el producto actualizado
    const updatedProduct = {
      ...products[productIndex],
      ...req.body,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : products[productIndex].image
    };

    // Reemplazamos el objeto en el array
    products[productIndex] = updatedProduct;

    // Escribimos en el JSON para persistir
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

    // Volvemos a la pagina de productos
    res.redirect('/products');
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Leer el id
    const productId = req.params.id;
    // Buscar la posicion actual del producto a eliminar
    const productIndex = products.findIndex((p) => p.id == productId);
    // Recortar el array sin ese producto
    products.splice(productIndex, 1);
    // Guardar en el json el nuevo array
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

    res.redirect('/products');
  }
};

module.exports = controller;
