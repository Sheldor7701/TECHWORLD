const express = require('express');
const { redirect, type } = require('express/lib/response');
const DB_product = require('../../DB_codes/DB_product')
const DB_user = require('../../DB_codes/DB_user')
const DB_admin = require('../../DB_codes/DB_admin')
const DB_cart = require('../../DB_codes/DB_cart')
const DB_pcbuilder = require('../../DB_codes/DB_pcbuilder')
const router = express.Router({ mergeParams: true });
router.get('/', async (req, res) => {
     const userid= req.session.userid;
     const products= await DB_pcbuilder.getUserBuild(userid);

    const data = {
        pageTitle:"ALL PRODUCTS",
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        products
    };
    res.render('pc_builder',data)
    //database query

   // await DB_admin.updateUserInfo(userid,username, email,password, address);


    //res.redirect('/user');
});
router.get('/addtocart', async (req, res) => {
    
    const user= await DB_user.getUserInfoByUserId(req.session.userid);
    await DB_pcbuilder.pcBuildConfirm(req.session.userid);
    req.session.cart=await DB_cart.getCart(req.session.userid);
    let price= await DB_cart.getCartPrice(req.session.userid);
    const data = {
        pageTitle: 'VIEW CART',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        user,
        price
    }
    return res.render('viewcart',data);

   //database query

  // await DB_admin.updateUserInfo(userid,username, email,password, address);


   //res.redirect('/user');
});
router.get('/motherboard', async (req, res) => {
    
    const products= await DB_product.getProductByType('MOTHERBOARD');
        const TYPE='MOTHERBOARD';
   const data = {
       pageTitle:"ALL PRODUCTS",
       isAuth: req.session.isAuth,
       userid: req.session.userid,
       username: req.session.username,
       isAdmin: req.session.isAdmin,
       cart: req.session.cart,
       products,
       TYPE
       ,allBrands:req.session.allBrands
,GRAPHICS_CARDBrands:req.session.GRAPHICS_CARDBrands
,PROCESSORBrands:req.session.PROCESSORBrands
,RAMBrands:req.session.RAMBrands
,HDDBrands:req.session.HDDBrands
,SSDBrands:req.session.SSDBrands
,MOTHERBOARDBrands:req.session.MOTHERBOARDBrands
,POWER_SUPPLYBrands:req.session.POWER_SUPPLYBrands
,HEADPHONEBrands:req.session.HEADPHONEBrands
,KEYBOARDBrands:req.session.KEYBOARDBrands
,MOUSEBrands:req.session.MOUSEBrands
,SPEAKERBrands:req.session.SPEAKERBrands
,UPSBrands:req.session.UPSBrands
,WEBCAMBrands:req.session.WEBCAMBrands

   };
   res.render('pc_builder_productlist',data)
   //database query

  // await DB_admin.updateUserInfo(userid,username, email,password, address);


   //res.redirect('/user');
});

// router.get('/:type/:motherboardid', async (req, res) => {
//     const TYPE= (req.params.type).toUpperCase().trim();
//     const MOTHERBOARDID= req.params.motherboardid;
//    // console.log(TYPE,MOTHERBOARDID);
//     const products= await DB_pcbuilder.getCompatibles(TYPE,MOTHERBOARDID);
    
//    res.redirect('/pcbuilder');
//    //database query

//   // await DB_admin.updateUserInfo(userid,username, email,password, address);


//    //res.redirect('/user');
// });
router.get('/chosen/:type/:productid', async (req, res) => {
    const userid= req.session.userid;
    const PRODUCTID= req.params.productid;
    const TYPE= (req.params.type).toUpperCase().trim();
    console.log(TYPE,PRODUCTID);
    await DB_pcbuilder.updateRecord(userid,TYPE,PRODUCTID);

    

    res.redirect('/pcbuilder');

   //database query

  // await DB_admin.updateUserInfo(userid,username, email,password, address);


   //res.redirect('/user');
});
router.get('/:type/:motherboardid', async (req, res) => {
    const TYPE= (req.params.type).toUpperCase().trim();
    const MOTHERBOARDID= req.params.motherboardid;
    const products= await DB_pcbuilder.getCompatibles(TYPE,MOTHERBOARDID);

   const data = {
       pageTitle:"ALL PRODUCTS",
       isAuth: req.session.isAuth,
       userid: req.session.userid,
       username: req.session.username,
       isAdmin: req.session.isAdmin,
       cart: req.session.cart,
       TYPE,
       products
       ,allBrands:req.session.allBrands
,GRAPHICS_CARDBrands:req.session.GRAPHICS_CARDBrands
,PROCESSORBrands:req.session.PROCESSORBrands
,RAMBrands:req.session.RAMBrands
,HDDBrands:req.session.HDDBrands
,SSDBrands:req.session.SSDBrands
,MOTHERBOARDBrands:req.session.MOTHERBOARDBrands
,POWER_SUPPLYBrands:req.session.POWER_SUPPLYBrands
,HEADPHONEBrands:req.session.HEADPHONEBrands
,KEYBOARDBrands:req.session.KEYBOARDBrands
,MOUSEBrands:req.session.MOUSEBrands
,SPEAKERBrands:req.session.SPEAKERBrands
,UPSBrands:req.session.UPSBrands
,WEBCAMBrands:req.session.WEBCAMBrands

   };
   res.render('pc_builder_productlist',data)
   //database query

  // await DB_admin.updateUserInfo(userid,username, email,password, address);


   //res.redirect('/user');
});




module.exports = router