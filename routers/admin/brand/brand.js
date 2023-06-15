const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')
const DB_brand = require('../../../DB_codes/DB_brands')

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const brands=await DB_brand.getAllBrands();
    const data = {
        pageTitle: 'Brands',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        isAdmin: req.session.isAdmin,
        brands
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


    };
    res.render('brandlist', data);
});
router.get('/newBrand',async (req,res)=>{
    const data={
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin
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
 res.render('Addbrand',data);

})
router.post('/newBrand',async (req,res)=>{
    
    await DB_brand.newBrand(req.body.name,req.body.logo, req.body.country);
    return res.redirect('/admin/brand');

})
router.get('/updateBrand/:brandid',async (req,res)=>{
    const brandid= req.params.brandid;
    const brand=await DB_brand.brandInfo(brandid);
    const brandProducts= await DB_brand.getAllFromBrand(brandid);
    const data={
        brandid,
        brand,
        brandProducts,
    isAuth: req.session.isAuth,
    userid: req.session.userid,
    username: req.session.username,
    isAdmin: req.session.isAdmin
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
res.render('updatebrand',data);

})
router.post('/updateBrand/:brandid',async (req,res)=>{
    
    await DB_brand.updateBrand(req.params.brandid,req.body.name,req.body.logo, req.body.country);
    return res.redirect('/admin/brand');

})

router.get('/brandinfo/:brandid', async (req, res) => {
        
    //database query
    const brandid= req.params.brandid;
    const brand=await DB_brand.brandInfo(brandid);
    const brandProducts= await DB_brand.getAllFromBrand(brandid);
    const data = {
        pageTitle: brand.BRANDNAME,
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        brand,
        brandProducts
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


    };
    res.render('brand', data);
});
module.exports = router