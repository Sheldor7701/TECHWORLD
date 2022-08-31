const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')
const DB_admin = require('../../../DB_codes/DB_admin')

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const news=await DB_admin.getAllNews();
    const data = {
        pageTitle: 'BREAKING NEWS',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        news
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
    res.render('breaking_news', data);
});
router.get('/remove/:bnid', async (req, res) => {
        
    //database query
    const bnid= req.params.bnid;
    await DB_admin.deleteBn(bnid);
    const data = {
        hello: "hello"
    };
    res.send(data);
});

router.post('/newsAdd',async (req,res)=>{
    
    const details= req.body.details;
   
    await DB_admin.addNews(details);

     
     const da={
         hello: "HELLO"
     };
     res.send(da);
    // let product="abcd";
    // res.send(product);
})
router.post('/newsUpdate/:nid',async (req,res)=>{
    const bn_id= req.params.nid;
    const details= req.body.details;
   
    await DB_admin.updateNews(bn_id,details);

     
     const da={
         hello: "HELLO"
     };
     res.send(da);

})



module.exports = router