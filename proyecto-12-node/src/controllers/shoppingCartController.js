const shoppingCartService = require('../services/shoppingCartService');

const shoppingCartController = {
    addProduct: (req, res) => {
        shoppingCartService.addProduct(req.query.idProduct);
        res.redirect("/products/catalog");
    },

    cart: (req, res) => {
        res.render('carrito', {userLogged: req.session.userLogged});
    }
}

module.exports = shoppingCartController;