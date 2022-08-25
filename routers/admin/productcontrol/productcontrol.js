const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')
const router = express.Router({ mergeParams: true });

router.post('/addProduct/:type', async (req, res) => {
    const type = req.params.type;
    
    //database query

   // await DB_admin.updateUserInfo(userid,username, email,password, address);


    //res.redirect('/user');
});


router.get('/changeproduct/:type', async (req, res) => {
        
    //database query
    const type= req.params.type;
    const products=await DB_product.getProductByType(type);
    const data = {
        pageTitle: type+'S',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        products
    };
    res.render('changeproduct', data);
});


module.exports = router