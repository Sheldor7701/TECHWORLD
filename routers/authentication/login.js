const express = require('express')
const bcrypt = require('bcrypt')
const DB_auth = require('../../DB_codes/DB_auth')
const router = express.Router({ mergeParams: true })
const DB_user = require('../../DB_codes/DB_user');
const DB_cart = require('../../DB_codes/DB_cart');


router.get('/', async (req, res) => {
    if (req.session.isAuth) {
        res.redirect('/');
    }
    res.render('login', { message: 'Please provide info' })
})



router.post('/', async (req, res) => {
    if (req.session.isAuth) {
        res.redirect('/');
    }
    const { email, password } = req.body;
    const user = await DB_auth.getUserByEmail(email);
    const userExists = user.length == 0 ? false : true;
    if (!userExists) {
        return res.render('login', { message: 'Error logging in' })
    }

    const passwordMatch = password == user[0].PASSWORD ? true: false;
    if (!passwordMatch) {
        return res.render('login', { message: 'Error logging in' })
    }
    //var session = req.session;
    req.session.userid =user[0].USERID ;
    req.session.username=user[0].NAME;
    req.session.isAuth = true;
    req.session.isAdmin= user[0].IS_ADMIN;
    req.session.cart= await DB_cart.getCart(user[0].USERID);
    req.session.allBrands = await DB_homepage.getAllBrands();
req.session.GRAPHICS_CARDBrands = await DB_homepage.getBrandsByProductType('GRAPHICS_CARD');
req.session.PROCESSORBrands = await DB_homepage.getBrandsByProductType('PROCESSOR');
req.session.RAMBrands = await DB_homepage.getBrandsByProductType('RAM');
req.session.HDDBrands = await DB_homepage.getBrandsByProductType('HDD');
req.session.SSDBrands = await DB_homepage.getBrandsByProductType('SSD');
req.session.MOTHERBOARDBrands = await DB_homepage.getBrandsByProductType('MOTHERBOARD');
req.session.POWER_SUPPLYBrands = await DB_homepage.getBrandsByProductType('POWER_SUPPLY');
req.session.HEADPHONEBrands = await DB_homepage.getBrandsByProductType('HEADPHONE');
req.session.KEYBOARDBrands = await DB_homepage.getBrandsByProductType('KEYBOARD');
req.session.MOUSEBrands = await DB_homepage.getBrandsByProductType('MOUSE');
req.session.SPEAKERBrands = await DB_homepage.getBrandsByProductType('SPEAKER');
req.session.UPSBrands = await DB_homepage.getBrandsByProductType('UPS');
req.session.WEBCAMBrands = await DB_homepage.getBrandsByProductType('WEBCAM');
   // req.session.cartPrice= await DB_cart.getCartPrice(user[0].USERID);

    res.redirect('/');
})

module.exports = router