const express = require('express')
const DB_product = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true })

// /product router
router.get('/new', async (req, res) => {
    const productlist= await DB_product.getNewlyReleasedProduct();
    const data = {
        pageTitle: 'Newly Released',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        productlist
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
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        productlist
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

    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})
router.get('/:type', async (req, res) => {
    const type= (req.params.type).toUpperCase().trim();
    const productlist= await DB_product.getProductByType(type);
    const data = {
        pageTitle: type,
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        productlist
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
        ,LAPTOPBrands:req.session.LAPTOPBrands
        ,MONITORBrands:req.session.MONITORBrands
    }
 
    {
        if (!productlist) return res.redirect('/error');

    }
    res.render('productlist', data)
})

router.get('/:type/:brandname', async (req, res) => {
    const type= (req.params.type).toUpperCase().trim();
    const brandname= (req.params.brandname).toUpperCase().trim();
    const productlist= await DB_product.getProductByBrandAndType(type,brandname);
    const data = {
        pageTitle: type,
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        productlist
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
        ,LAPTOPBrands:req.session.LAPTOPBrands
        ,MONITORBrands:req.session.MONITORBrands
    }
    res.render('productlist', data)
})

// router.get('/monitor', async (req, res) => {
    
//     const productlist= await DB_product.getProductByType('MONITOR');
//     const data = {
//         pageTitle: 'Monitors',
//         isAuth: req.session.isAuth,
//         userid: req.session.userid,
//         username: req.session.username,
//         isAdmin: req.session.isAdmin,
//         cart: req.session.cart,
//         productlist
//     }
 
//     {
//         if (!productlist) return res.redirect('/error');

//     }
//     res.render('productlist', data)
// })

module.exports = router