const express = require('express');
const validator = require('validator')
const { redirect } = require('express/lib/response');
const DB_user = require('../../DB_codes/DB_user');
const DB_cart= require('../../DB_codes/DB_cart');
const DB_admin = require('../../DB_codes/DB_admin');
const router = express.Router({ mergeParams: true });


// '/user'

router.get('/', async (req, res) => {
    if (req.session.isAuth)
        return res.redirect('/user/' + req.session.userid);
    //return res.redirect('/login');
})



router.get('/:userid', async (req, res) => {
    const userid = req.params.userid;
    const loggedinAs = req.session.userid;

    if (!req.session.isAuth) return res.redirect('/login');
    if (userid != loggedinAs) return res.redirect('/error');
    
    //database query
    const products = await DB_cart.orderHistory(userid);
    const userInfo = await DB_user.getUserInfoByUserId(userid);
    //error checking
    const data = {
        pageTitle: 'Profile',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        userInfo,
        products
    }
    res.render('userprofile', data);
})

router.get('/update', async (req, res) => {
    const userid = req.session.userid;
  
    
    //database query
    const userInfo = await DB_user.getUserInfoByUserId(userid);
    //error checking
    const data = {
        pageTitle: 'Profile',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        userInfo
    }
    res.render('userprofile', data);
})




router.post('/update', async (req, res) => {
    const userid = req.session.userid;



    await DB_user.updateUserInfo(userid,req.body.username, req.body.email,req.body.password, req.body.address);

   // console.log("Successfully updated");

    res.redirect('/user');
})



router.get('/:userid/delete', async (req, res) => {
    const userid = req.params.userid;
    const loggedinAs = req.session.userid;

    if (!req.session.isAuth) return res.redirect('/login');
    if (userid != loggedinAs) return res.redirect('/error');
    
    //database query
     await DB_admin.deleteUser(userid);
     console.log("Successfully deleted");

    req.session.destroy();
    res.redirect('/');
});
// router.get('/:userid/cart', async (req, res) => {
//     const userid = req.params.userid;
//     const loggedinAs = req.session.userid;

//     if (!req.session.isAuth) return res.redirect('/login');
//     if (userid != loggedinAs) return res.redirect('/error');
    
//     //database query
//      const cart= await DB_user.getCart(userid);
//      const data = {
//         pageTitle: 'USER CART',
//         isAuth: req.session.isAuth,
//         userid: req.session.userid,
//         username: req.session.username,
//         cart
//     }
//     res.render('productlist', data);
// });

module.exports = router