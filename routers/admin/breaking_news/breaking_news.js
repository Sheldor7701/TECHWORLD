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
        cart: req.session.cart,
        news
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



module.exports = router