const express = require('express')
const bcrypt = require('bcrypt')
const DB_auth = require('../../DB_codes/DB_auth')
const router = express.Router({ mergeParams: true })
const DB_user = require('../../DB_codes/DB_user');


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
    req.session.cart= await DB_user.getCart(user[0].USERID);
    res.redirect('/');
})

module.exports = router