const express = require('express');
const { redirect } = require('express/lib/response');
const DB_admin = require('../../DB_codes/DB_admin');
const DB_product = require('../../DB_codes/DB_product')
const DB_user = require('../../DB_user/DB_user')

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
        
    //database query
    const users=await DB_admin.getAllUsers();
    const data = {
        pageTitle: 'Users',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        users
    };
    res.render('userlist', data);
});

router.get('/remove/:userid', async (req, res) => {
    const userid = req.params.userid;

    //database query
     await DB_user.deleteUser(userid);
     console.log("Successfully deleted");

});


module.exports = router