const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Products = require("./Models/product.model");

const axios = require('axios')

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });


 mongoose.connect('mongodb+srv://admin:admin@cluster0.fd1zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // mongoose.connect('mongodb://localhost:27017/connectifyDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log('cnx failed');
    });

    
axios.get('https://tech.dev.ats-digital.com/api/products?size=100').then(resp => {

for (let i = 0; i < resp.data.products.length; i++) {
    let products = new Products(resp.data.products[i]);
products.save()
}


    });
    


    const productroute = require("./Routes/product.route");
    app.use('/api/',productroute);


    app.listen(3000 , () => console.log("server running perfectly in local"));    
