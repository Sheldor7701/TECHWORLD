const express = require('express')
const router = express.Router({ mergeParams: true });
const DB_homepage = require('../DB_codes/DB_homepage');
//const DB_user = require('../DB_codes/DB_user');

//!require all sub routers
const loginRouter = require('./authentication/login')
const registerRouter = require('./authentication/register')
const logoutRouter = require('./authentication/logout')

const productRouter = require('./product/product')
const productListRouter = require('./productlist/productlist')
const searchResultsRouter = require('./searchresults/searchresults')

const userRouter = require('./user/user')
const cartRouter = require('./cart/cart')
const adminRouter= require('./admin/admin')
const pcbuilderRouter= require('./pcbuilder/pcbuilder')


//!HOME PAGE
router.get('/', async (req, res) => {
    const userid = req.session.userid;
    const newlyReleased = await DB_homepage.getNewlyReleasedProduct();
    const topProducts = await DB_homepage.getTopProducts();
    let allBrands= await DB_homepage.getAllBrands()
        let GRAPHICS_CARDBrands = await DB_homepage.getBrandsByProductType('GRAPHICS_CARD');
    let LAPTOPBrands = await DB_homepage.getBrandsByProductType('LAPTOP');
    let PROCESSORBrands = await DB_homepage.getBrandsByProductType('PROCESSOR');
    let RAMBrands = await DB_homepage.getBrandsByProductType('RAM');
    let HDDBrands = await DB_homepage.getBrandsByProductType('HDD');
    let MONITORBrands = await DB_homepage.getBrandsByProductType('MONITOR');
    let SSDBrands = await DB_homepage.getBrandsByProductType('SSD');
    let MOTHERBOARDBrands = await DB_homepage.getBrandsByProductType('MOTHERBOARD');
    let POWER_SUPPLYBrands = await DB_homepage.getBrandsByProductType('POWER_SUPPLY');
    let HEADPHONEBrands = await DB_homepage.getBrandsByProductType('HEADPHONE');
    let KEYBOARDBrands = await DB_homepage.getBrandsByProductType('KEYBOARD');
    let MOUSEBrands = await DB_homepage.getBrandsByProductType('MOUSE');
    let SPEAKERBrands = await DB_homepage.getBrandsByProductType('SPEAKER');
    let UPSBrands = await DB_homepage.getBrandsByProductType('UPS');
    let WEBCAMBrands = await DB_homepage.getBrandsByProductType('WEBCAM');
    //const cart= await DB_user.getCart(userid);
    const data = {
        pageTitle: 'TechWorld',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        message: 'This is the Home Page',

        newlyReleased,
        topProducts,
        allBrands,
        GRAPHICS_CARDBrands ,
        LAPTOPBrands ,
        PROCESSORBrands ,
        RAMBrands ,
        HDDBrands ,
        MONITORBrands ,
        SSDBrands ,
        MOTHERBOARDBrands ,
        POWER_SUPPLYBrands ,
        HEADPHONEBrands ,
        KEYBOARDBrands ,
        MOUSEBrands ,
        SPEAKERBrands ,
        UPSBrands ,
        WEBCAMBrands
        
        // recommendation
    }
    res.render('index', data)
})




//!set up sub routers
router.use('/product', productRouter)
router.use('/productlist', productListRouter)
router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/logout', logoutRouter)

router.use('/searchresults', searchResultsRouter)
router.use('/user', userRouter)
router.use('/cart',cartRouter)
router.use('/admin', adminRouter);
router.use('/pcbuilder', pcbuilderRouter);

//!ERRORS

router.get('*', (req, res) => {
    const data = {
        pageTitle: '404',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        message: 'Requested page does not exist'
    }
    res.status(400).render('error', data)
})

router.get('/error', (req, res) => {

    const data = {
        pageTitle: '404',
        isAuth: req.session.isAuth,
        userid: req.session.userid,
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        cart: req.session.cart,
        message: 'Requested page does not exist'
    }
    res.status(400).render('error', data)
})



module.exports = router
