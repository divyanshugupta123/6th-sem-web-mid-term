const exp = require('express');
const app = exp();
const path = require('path');
const seedDB = require('./seed')
const mongoose = require('mongoose');
const Product = require('../backend/models/Product');
mongoose.connect('mongodb://127.0.0.1:27017/mid')
    .then(() => {
        console.log("DB connected successfully")
    })
    .catch((err) => {
        console.log("DB not connected")
        console.log(err);
    })
const methodOverride = require('method-override');
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(exp.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
// seedDB();

app.get('/', async (req, res) => {

    let products = await Product.find({});
    

    res.render('app', { products });
})

app.listen(5173, () => {
    console.log("Sever connected")
})

