const express = require('express')
const DB_auth = require('../../DB_codes/DB_auth')
const router = express.Router({ mergeParams: true })


router.get('/', async (req, res) => {
    if (req.session.isAuth) {
        res.redirect('/');
    }
    res.render('register', { message: 'Enter Credentials' })
})




//user makes post request to register him into db
router.post('/', async (req, res) => {
    const { username, email, password, address } = req.body;

    let userExists = (await DB_auth.getUserByEmail(email)).length == 0 ? false : true;

    if (userExists) {
        return res.render('register', { message: 'User already exists' })
    }
    if (!username || !email || !password || !address) {
        return res.render('register', { message: 'Please provide all info' })
    }

    //insert user into db with password
    
    await DB_auth.insertAccountIntoDB(username, email, password, address);
    res.redirect('/')
})

module.exports = router