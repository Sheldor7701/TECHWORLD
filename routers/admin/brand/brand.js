const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')

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
router.get('/:brandid', async (req, res) => {
        
    //database query
    const brandid= req.params.brandid;
    const brand=await DB_admin.brandInfo(brandid);
    const brandProducts= await DB_admin.getAllFromBrand(brandid);
    const data = {
        pageTitle: brand.BRANDNAME,
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        brand,
        brandProducts
    };
    res.render('brand', data);
});
router.post('/newBrand',async (req,res)=>{
    
    await DB_admin.newBrand(req.body.name,req.body.logo, req.body.country);
    return res.redirect('/admin/brand');

})



module.exports = router