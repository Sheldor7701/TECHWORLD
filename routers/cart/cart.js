const express = require('express');
const validator = require('validator')
const { redirect } = require('express/lib/response');
const DB_cart = require('../../DB_codes/DB_cart');
const DB_product = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true });

router.get('/update', async (req, res) => {
   
    console.log(req.session.cart);
    return res.redirect('/');
})
router.post('/cartIncreament',async (req,res)=>{
    
    const pid= req.body.pid;
    const uid= req.session.userid;
    console.log(pid," inc er vitor");
    await DB_cart.cartIncreament(uid,pid);
    req.session.cart= await DB_cart.getCart(uid);
    console.log("doneeeee");
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/cartDecreament',async (req,res)=>{
    
    const pid= req.body.pid;
    const uid= req.session.userid;

    await DB_cart.cartDecreament(uid,pid);
    req.session.cart= await DB_cart.getCart(uid);
    console.log("doneeeee");
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/cartAdd',async (req,res)=>{
    
    const pid= req.body.pid;
    const uid= req.session.userid;
    console.log(pid," hay re pid");
    const exists= await DB_cart.checkCart(uid,pid);
    if(!exists)
     {await DB_cart.addToCart(uid,pid);
     req.session.cart= await DB_cart.getCart(uid);}
     else{
         console.log("found");
     }
     let product= await DB_product.getProductByID(pid);
     
     const da={
         exists,
          product
     };
     console.log(da);
     res.send(da);
    // let product="abcd";
    // res.send(product);
})
router.get('/viewcart', async (req, res) => {
    const data = {
        pageTitle: 'VIEW CART',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
    }
    return res.render('viewcart',data);
})
module.exports = router