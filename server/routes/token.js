const express = require("express");
const router = express.Router();
const { getToken, stkPush, mpesaCallback } = require("../controllers/token");

router.post("/", getToken, stkPush);
router.post("/callback", mpesaCallback); // Safaricom will call this route

module.exports = router;
