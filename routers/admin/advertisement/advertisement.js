const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_advertisement = require('../../../DB_codes/DB_advertisement')
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const ads=await DB_advertisement.getAllAds();
    const data = {
        pageTitle: 'Advertisements',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        ads
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
    res.render('advertisement', data);
});

router.get('/remove/:adid', async (req, res) => {
        
    //database query
    const adid= req.params.adid;
    await DB_advertisement.deleteAd(adid);
    const da = {
        hello: "hello"
    };
    res.send(da);
});
router.post('/priorityIncreament',async (req,res)=>{
    
    const adid= req.body.adid;
    await DB_advertisement.adPrioIncreament(adid);
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/priorityDecreament',async (req,res)=>{
    
    const adid= req.body.adid;
    await DB_advertisement.adPrioDecreament(adid);
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/newAd',async (req,res)=>{
    
    await DB_advertisement.newAd(req.body.type,req.body.productid,req.body.brandid,req.body.productType,req.body.image, req.body.details, req.body.link);
    return res.redirect('/advertisement/advertisement');

})

router.post('/adUpdate/:adid',async (req,res)=>{

   
    await DB_advertisement.updateAd(req.params.adid,req.body.type,req.body.productid,req.body.brandid,req.body.productType,req.body.image, req.body.details, req.body.link);

     
     const da={
         hello: "HELLO"
     };
     res.send(da);

})


module.exports = router