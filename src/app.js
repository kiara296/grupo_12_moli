const express = require('express');
const app = express();

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


app.set('view engine', 'ejs');

app.set('views', './src/views');


app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


app.use(express.static('public'));