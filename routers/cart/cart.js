const express = require('express');
const validator = require('validator')
const { redirect } = require('express/lib/response');
const DB_user = require('../../DB_codes/DB_user');
const router = express.Router({ mergeParams: true });

router.get('/update', async (req, res) => {
   
    console.log(req.session.cart);
    return res.redirect('/');
})

module.exports = router