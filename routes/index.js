const express = require("express");
const router = express.Router();
const fileUpload = require('./fileUpload')



router.use('/upload', fileUpload)

module.exports = router