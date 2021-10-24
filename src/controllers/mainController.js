const path = require('path');

const mainController = {
    index: (req, res) => { res.render(path.join(__dirname, '../views/index.ejs')) }
};

module.exports= mainController