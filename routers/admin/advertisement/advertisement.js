const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')
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

router.get('/remove/:adid', async (req, res) => {
        
    //database query
    const adid= req.params.adid;
    await DB_admin.deleteAd(adid);
    const da = {
        hello: "hello"
    };
    res.send(da);
});
router.post('/priorityIncreament',async (req,res)=>{
    
    const adid= req.body.adid;
    await DB_admin.adPrioIncreament(adid);
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/priorityDecreament',async (req,res)=>{
    
    const adid= req.body.adid;
    await DB_admin.adPrioDecreament(adid);
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/newAd',async (req,res)=>{
    
    await DB_admin.newAd(req.body.type,req.body.productid,req.body.brandid,req.body.productType,req.body.image, req.body.details, req.body.link);
    return res.redirect('/admin/advertisement');

})




module.exports = router