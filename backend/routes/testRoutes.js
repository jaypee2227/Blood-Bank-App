const express = require("express");
const sendData = require("../controllers/testController");


const router = express.Router()

router.get('/test', sendData)

module.exports = router;