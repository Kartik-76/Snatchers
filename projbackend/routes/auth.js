var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator');
const {signout, signup, signin, isSignedIn} = require("../controller/auth");

router.post("/signup",[
    check("name")
    .isLength({min:2})
    .withMessage('name should be at least 2 char'),
    check("email")
    .isEmail()
    .withMessage('Email is require'),
    check("password")
    .isLength({ min: 3 })
    .withMessage('must be at least 3 chars long')
],signup);


router.post(
    "/signin",[
    check("email")
    .isEmail()
    .withMessage('Email is require'),
    check("password")
    .isLength({ min: 3 })
    .withMessage('Password field is Required')
],signin);


router.get("/signout",signout);



module.exports = router;