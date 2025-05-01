const Coupon = require("../model/couponModel");
const User = require("../model/userModel")

const getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}



module.exports = {  getAllCoupons };
