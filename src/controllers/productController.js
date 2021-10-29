const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const getById = (id) => { return products.find(p => p.id == id); }

const productController = {
    /* Catalogo todos los productos */
    catalogo: (req, res) => { res.render(path.join(__dirname, '../views/index.ejs')) },

    /* Carrito de compra */
    carrito: (req, res) => { res.render(path.join(__dirname, '../views/carrito.ejs')) },
    
    /* Detalle de un producto  */
    detail: (req, res) =>  {
        const requestedId = req.params.id;
        const productos = getById (requestedId);
        res.render('detail', {productos})
    },
          
    /* Formulario de creacion de producto */
    crear: (req, res) => {  res.render(path.join(__dirname, '../views/crearProductoForm.ejs'))},

    /* Creacion producto: Metodo para guardar */
    guardar: (req, res) => { res.render('Producto creado')},

    /* Formulario de edicion de producto */
    editar: (req, res) => {  res.render(path.join(__dirname, '../views/editarProductoForm.ejs'))},

    /* Actualizar producto: metodo para editar */
    update: (req, res) => { res.render('Producto editado')},
};


module.exports = productController