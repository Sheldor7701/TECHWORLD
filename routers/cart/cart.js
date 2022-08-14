const express = require('express');
const validator = require('validator')
const { redirect } = require('express/lib/response');
const DB_user = require('../../DB_codes/DB_user');
const router = express.Router({ mergeParams: true });

router.get('/update', async (req, res) => {
   
    console.log(req.session.cart);
    return res.redirect('/');
})
router.post('/cartIncreament',async (req,res)=>{
    
    const pid= req.body.pid;
    const uid= req.session.userid;
    
    await DB_user.cartIncreament(uid,pid);
    req.session.cart= await DB_user.getCart(uid);
    console.log("doneeeee");
    let da = {
        id:"hello"
    }
    
    res.send(da);
})
router.post('/cartDecreament',async (req,res)=>{
    
    const pid= req.body.pid;
    const uid= req.session.userid;
    
    await DB_user.cartDecreament(uid,pid);
    req.session.cart= await DB_user.getCart(uid);
    console.log("doneeeee");
    let da = {
        id:"hello"
    }
    
    res.send(da);
})

module.exports = router