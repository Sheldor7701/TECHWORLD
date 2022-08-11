const express = require('express')
const DB_product = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true })

// /product router

router.get('/laptop', async (req, res) => {
    const productlist= await DB_product.getProductByType('LAPTOP');
    const data = {
        pageTitle: 'Laptops',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        productlist
    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})

router.get('/monitor', async (req, res) => {
    
    const productlist= await DB_product.getProductByType('MONITOR');
    const data = {
        pageTitle: 'Monitors',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        productlist
    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})
router.get('/new', async (req, res) => {
    const productlist= await DB_product.getNewlyReleasedProduct();
    const data = {
        pageTitle: 'Newly Released',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        productlist
    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})

router.get('/top', async (req, res) => {
    const productlist= await DB_product.getTopProducts();
    const data = {
        pageTitle: 'Top Products',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        productlist
    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})
module.exports = router