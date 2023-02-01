const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated, isAdmin} = require("../controller/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controller/user");
const {updateStock} = require("../controller/product");
const {getOrderById, createOrder, getAllOrders, updateStatus, getOrderStatus} = require("../controller/order");

module.exports = router;

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//Actual Routes


//Create Route
router.post("/order/create/:userId",isSignedIn,isAuthenticated, pushOrderInPurchaseList,updateStock,createOrder);

//read route
router.get("/order/all/:orderId", isSignedIn, isAuthenticated,isAdmin,getAllOrders);

//status of order
router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus);


