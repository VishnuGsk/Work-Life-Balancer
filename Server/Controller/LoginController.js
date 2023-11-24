const express = require('express');
const router = express.Router();
const LoginService = require('../Services/LoginService')
router.post('/login',LoginService);
module.exports = router