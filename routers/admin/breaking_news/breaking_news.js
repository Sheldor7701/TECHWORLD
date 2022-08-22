const express = require('express');
const { redirect } = require('express/lib/response');
const DB_admin = require('../../DB_codes/DB_admin');
const DB_product = require('../../DB_codes/DB_product');
const DB_user = require('../../DB_user/DB_user');

const router = express.Router({ mergeParams: true });



module.exports = router