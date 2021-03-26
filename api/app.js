const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const formidableMiddleware = require('express-formidable');
const config = require('./config/database');

// connect to db
mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Connected to mongo'));

const app = express();

app.use(formidableMiddleware());
app.use(express.static(path.join(__dirname, 'public')));

/**  Add headers */
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

const pages = require('./routes/pages');
const categories = require('./routes/categories');
const products = require('./routes/products');
const orders = require('./routes/orders');

app.use('/pages', pages);
app.use('/categories', categories);
app.use('/products', products);
app.use('/orders', orders);

const port = 3000;
app.listen(port, () => console.log('server running at %s', port));
