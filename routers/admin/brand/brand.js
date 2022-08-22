const express = require('express');
const { redirect } = require('express/lib/response');
const DB_admin = require('../../DB_codes/DB_admin');
const DB_product = require('../../DB_codes/DB_product')
const DB_user = require('../../DB_user/DB_user')

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const brands=await DB_admin.getAllBrands();
    const data = {
        pageTitle: 'Brands',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        brands
    };
    res.render('brandlist', data);
});





module.exports = router