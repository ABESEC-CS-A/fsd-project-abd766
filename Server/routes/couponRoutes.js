const express = require('express')
const router = express.Router();
const couponController = require("../controller/couponController")
router.get("/coupons",couponController.getAllCoupons);
// router.get("/coupons/:id",couponController.getUser);
// router.post("/createcoupon",couponController.createUser);
// router.delete("/removecoupon/:id",couponController.deleteUser);

module.exports=router;
