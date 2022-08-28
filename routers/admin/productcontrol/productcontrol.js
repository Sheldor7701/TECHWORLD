const express = require('express');
const { redirect, type } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')
const router = express.Router({ mergeParams: true });
router.get('/', async (req, res) => {
    const products = await DB_product.allProduct();
    const data = {
        pageTitle:"ALL PRODUCTS",
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        products
    };
    res.render('Adminproductlist',data)
    //database query

   // await DB_admin.updateUserInfo(userid,username, email,password, address);


    //res.redirect('/user');
});

router.get('/addProduct/:type', async (req, res) => {
    const type= (req.params.type).toLowerCase().trim();
    const data = {
        pageTitle:"ADD PRODUCTS",
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
    };
    res.render('add'+type,data)

});
router.post('/addProduct/:type', async (req, res) => {
    const TYPE= (req.params.type).toUpperCase().trim();
    console.log(req.body);
    await DB_product.addProduct(TYPE,req.body);
    res.redirect('/admin/product');

});


router.get('/updateproduct/:productid', async (req, res) => {
        
    //database query
    const PRODUCTID= req.params.productid;
    const PRODUCT=await DB_product.getProductByID(PRODUCTID);
    const TYPE=PRODUCT.TYPE;
    const data = {
        pageTitle: type+'S',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        PRODUCT
    };
    res.render('update'+TYPE.toLowerCase().trim(), data);
});


router.post('/updateProduct/:productid', async (req, res) => {
    const PRODUCTID= (req.params.productid);
    await DB_product.updateProduct(PRODUCTID,req.body);
    // const products = await DB_product.allProduct();
    // const data = {
    //     pageTitle:"ADD PRODUCTS",
    //     isAuth: req.session.isAuth,
    //     userid: req.session.userid,
    //     username: req.session.username,
    //     isAdmin: req.session.isAdmin,
    //     cart: req.session.cart,
    //     products
    // };
    res.redirect('/admin/product');

});
// router.get('/removeproduct/:productid', async (req, res) => {
        
//     //database query
//     const pro= req.params.type;
//     const products=await DB_product.removeProduct(type);
//     const data = {
//         pageTitle: type+'S',
//         isAuth: req.session.isAuth,
//         userid: req.session.userid,
//         username: req.session.username,
//         cart: req.session.cart,
//         products
//     };
//     res.render('changeproduct', data);
// });


module.exports = router