const express = require('express');
const { redirect } = require('express/lib/response');
const DB_admin = require('../../DB_codes/DB_admin');
const DB_product = require('../../DB_codes/DB_product');
const DB_user = require('../../DB_user/DB_user');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const ads=await DB_admin.getAllAds();
    const data = {
        pageTitle: 'Advertisements',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        ads
    };
    res.render('advertisement', data);
});






module.exports = router