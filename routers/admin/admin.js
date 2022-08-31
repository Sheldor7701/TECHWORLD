const express = require('express');
const { redirect } = require('express/lib/response');
const DB_product = require('./../../DB_codes/DB_product')
const DB_user = require('./../../DB_codes/DB_user')
const DB_admin = require('./../../DB_codes/DB_admin')

const router = express.Router({ mergeParams: true });


const adsRouter = require('./advertisement/advertisement');
const brandRouter = require('./brand/brand');
const breakingNewsRouter = require('./breaking_news/breaking_news');
const userControlRouter = require('./usercontrol/usercontrol');
const productControlRouter = require('./productcontrol/productcontrol');


// '/admin'

router.get('/', async (req, res) => {
    if (req.session.isAuth)
        {
            const userid = req.session.userid;

    
    //database query
    //error checking
    const data = {
        pageTitle: 'Admin Info',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        cart: req.session.cart
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
 

    }
       res.render('admin', data);
        }
    else return res.redirect('/login');
})



router.use('/advertisement', adsRouter);
router.use('/brand', brandRouter);
router.use('/breakingnews', breakingNewsRouter);
router.use('/userlist', userControlRouter);
router.use('/product', productControlRouter);











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