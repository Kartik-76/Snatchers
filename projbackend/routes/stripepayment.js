const express = require("express")
const router = express.Router();
const {makepayment} = require("../controller/stripepayment")

router.post("/stripepayment",makepayment)

module.exports = router