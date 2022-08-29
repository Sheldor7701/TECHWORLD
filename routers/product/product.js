const express = require('express')
const DB_product = require('../../DB_codes/DB_product')
const router = express.Router({ mergeParams: true })

// /product router

router.get('/:productid', async (req, res) => {
    const productid = req.params.productid;
    console.log(productid+"  IDDD");
    const product= await DB_product.getProductByID(productid);

    const data = {
        pageTitle: 'Product',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        product
    }
 
    {
        if (!product) return res.redirect('/error');

    }
    res.render('product', data)
})




module.exports = router