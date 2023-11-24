const express = require('express');
const router = express.Router();
const EndTimeService = require('../Services/endTimeService');
router.post('/endTime',EndTimeService);
module.exports = router