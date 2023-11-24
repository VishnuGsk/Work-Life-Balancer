
const express = require('express');
const router = express.Router();
const UpdateDataService = require('../Services/updateDataService')
router.post('/updateData',UpdateDataService);
module.exports = router