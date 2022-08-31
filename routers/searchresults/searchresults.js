const express = require('express')
const DB_search = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true })



router.post('/', async (req, res) => {
    //Processing the search string
    let string = (req.body.search).toUpperCase().trim().split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = '%' + string[i] + '%';
    }
    if (string.length == 0) return res.redirect('/');
    const productlist= await DB_search.getProductBySearch(string)

    const data = {
        pageTitle: 'Search results',
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
    res.render('productlist', data);
})



router.get('/', async (req, res) => {
    return res.redirect('/');
})

module.exports = router;