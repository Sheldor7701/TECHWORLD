const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('../../../DB_codes/DB_product')
const DB_user = require('../../../DB_codes/DB_user')

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const users=await DB_user.getAllUsers();
    const data = {
        pageTitle: 'Users',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        users
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
    res.render('userlist', data);
});
router.get('/:userid', async (req, res) => {
        
    //database query
    const user=await DB_user.getUserInfoByUserId(req.params.userid);
    const data = {
        pageTitle: 'Users',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        user
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
    res.render('userlist', data);
});

router.post('/remove/:userid', async (req, res) => {
    const userid = req.params.userid;

    //database query
     await DB_user.deleteUser(userid);
     let da={
        userid
     };
     res.send(da);
    
});
router.post('/banUnban/:userid', async (req, res) => {
    const userid = req.params.userid;

    //database query
     await DB_user.banUnbanUser(userid);
     let da={
        userid
     };
     res.send(da);
    
});

module.exports = router