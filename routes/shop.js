const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin')

router.get('/',(req, res, next)=> {
    console.log(adminData.products);
    // res.sendFile(path.join(__dirname,'..','views','shop.html')) //dirname holds the obsolute path of this project folder (routes/shop.js) in the OS
    // res.sendFile(path.join(rootDir,'views','shop.html')) 
    
    
    const products = adminData.products;
    //we will send the products variable to the shop.pug {prods: products}
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});//we don't need to add .pug because we set app.set('view engine','pug'); in the app.js
    
    

    //res.send('<h1>Hello from express</h1>');
});

module.exports = router;