const express = require('express')
const DB_search = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true })



router.post('/', async (req, res) => {
    //Processing the search string
    let string = (req.body.search).toUpperCase().trim().split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = '%' + string[i] + '%';
    }
    if (string.length == 0) return res.redirect('/');
    const productlist= await DB_search.getProductBySearch(string)

    const data = {
        pageTitle: 'Search results',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart,
        productlist
    }
    res.render('productlist', data);
})



router.get('/', async (req, res) => {
    return res.redirect('/');
})

module.exports = router;