const express = require("express");
const router = express.Router();

const {
    getCategoryById, 
    createCategory, 
    getCategory, 
    getAllCategory, 
    updateCategory, 
    removeCategory
} = require("../controller/category")
const {isAuthenticated,isSignedIn,isAdmin} = require("../controller/auth")
const {getUserById} = require("../controller/user")


//Params
router.param("userId", getUserById);
router.param("categoryId",getCategoryById)

//actual Routes

//create route
router.post(
    "/category/create/:userId",
    isSignedIn, 
    isAuthenticated, 
    isAdmin, 
    createCategory
);

//read route
router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategory);

//update route
router.put(
    "/category/:categoryId/:userId",
    isSignedIn, 
    isAuthenticated, 
    isAdmin,  
    updateCategory
);

//delete route
router.delete(
    "/category/:categoryId/:userId",
    isSignedIn, 
    isAuthenticated, 
    isAdmin, 
    removeCategory
);


module.exports = router;