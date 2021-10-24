const path = require('path');

const productController = {
    carrito: (req, res) => { res.render(path.join(__dirname, '../views/carrito.ejs')) },
    detail: (req, res) => { res.render(path.join(__dirname, '../views/detail.ejs')) }
};


module.exports = productController