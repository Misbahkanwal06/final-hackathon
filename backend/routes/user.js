const express = require('express');
const router = express.Router();
const {signup,login} = require('../controller/user');


router.post('/signup',signup);
router.get('/login',login);

module.exports = router;
