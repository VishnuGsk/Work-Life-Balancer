const express = require('express');
const router = express.Router();
const FetchTidService = require('../Services/fetchTidService');
router.post('/fetchTid',FetchTidService);
module.exports = router