const express = require('express');
const router = express.Router();
const InitUserService = require('../Services/intitUserService');
router.post('/initUser',InitUserService);
module.exports = router