const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.getPostProduct = (req, res, next) => {
    if (!req.body.title || req.body.title.trim() === '') {
        return res.status(400).json({ error: 'Please provide a Product title.' });
    }
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};