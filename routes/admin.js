const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// router.get('/admin/add-product',(req, res, next)=> {

router.get('/add-product',(req, res, next)=> {
    //res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{pageTitle: 'Add Product', path:'/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true})
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
});
router.post('/add-product', (req,res,next) =>{
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;