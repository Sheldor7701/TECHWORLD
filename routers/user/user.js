const express = require('express');
const validator = require('validator')
const { redirect } = require('express/lib/response');
const DB_user = require('../../DB_codes/DB_user');
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
    const userInfo = await DB_user.getUserInfoByUserId(userid);
    //error checking
    const data = {
        pageTitle: 'Profile',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        userInfo
    }
    res.render('userprofile', data);
})





router.post('/:userid/update', async (req, res) => {
    const userid = req.params.userid;
    const loggedinAs = req.session.userid;

    if (!req.session.isAuth) return res.redirect('/login');
    if (userid != loggedinAs) return res.redirect('/error');

    const { username, email,password, address } = req.body;
    if (!validator.isEmail(email)) return res.redirect('/user');
    if (address === '') return res.redirect('/user');
    //database query

    await DB_user.updateUserInfo(userid,username, email,password, address);

    console.log("Successfully updated");

    res.redirect('/user');
})



router.get('/:userid/delete', async (req, res) => {
    const userid = req.params.userid;
    const loggedinAs = req.session.userid;

    if (!req.session.isAuth) return res.redirect('/login');
    if (userid != loggedinAs) return res.redirect('/error');
    
    //database query
     await DB_user.deleteUser(userid);
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