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
        cart: req.session.cart
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
    res.render('Add'+type,data)

});
router.post('/addProduct/:type', async (req, res) => {
    //const TYPE= (req.params.type).toUpperCase().trim();
    //console.log(req.body);
    
    await DB_product.addProduct(req.body);
    res.redirect('/admin/product');

});


router.get('/updateproduct/:productid', async (req, res) => {
        
    //database query
    const PRODUCTID= req.params.productid;
    //console.log(PRODUCTID+"IDDDDDDDDD");
    const product=await DB_product.getProductByID(PRODUCTID);
    console.log(product);

    const TYPE=product.TYPE;
    const data = {
        pageTitle: type+'S',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        product
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
    res.render('update'+TYPE.toLowerCase().trim(), data);
});

function getString(chars){
    if(chars==null) return '';
    return chars;
}
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


router.get('/setcompatibility/:productid', async (req, res) => {
        
    //database query
    const PRODUCTID= req.params.productid;
    //console.log(PRODUCTID+"IDDDDDDDDD");
    const motherboards=await DB_product.getProductByType('MOTHERBOARD');
    //console.log(product);

    //const TYPE=product.TYPE;
    const data = {
        pageTitle: type+'S',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        motherboards,
        PRODUCTID
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
    res.render('Set_compatibility', data);
});
router.post('/setcompatibility/:productid', async (req, res) => {
        
    //database query
    //const PRODUCTID= req.params.productid;
    //console.log(PRODUCTID+"IDDDDDDDDD");
    //const motherboards=await DB_product.getProductByType('MOTHERBOARD');
    console.log(req.body);
    const PRODUCTID= req.params.productid;
    await DB_product.setCompatibleMotherboards(PRODUCTID,req.body.list);
    // const TYPE=product.TYPE;
    // const data = {
    //     pageTitle: type+'S',
    //     isAuth: req.session.isAuth,
    //     userid: req.session.userid,
    //     username: req.session.username,
    //     isAdmin: req.session.isAdmin,
    //     cart: req.session.cart,
    //     motherboards,
    //     PRODUCTID
    // };
    // res.render('update'+TYPE.toLowerCase().trim(), data);
    const da={
        PRODUCTID
     };
    res.send(da);
});

module.exports = router