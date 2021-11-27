const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieAuth = require('../src/middlewares/cookieAuth');

app.use(methodOverride('_method'));
app.use(session({secret: 'This is secret!'}));
app.use(cookieParser());
app.use(cookieAuth);
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/', productRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


app.use(express.static('public'));