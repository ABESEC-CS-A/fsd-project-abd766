const mongoose = require("mongoose")
const couponSchema = new mongoose.Schema({
    email: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    couponID: { type: String, required: true, unique: true },
    meal: { type: String, required: true },
    mess_name: { type: String, required: true },
    validity: { type: String, required: true },
    Contact: { type: String, required: true },
    Location: { type: String, required: true },
});

const Coupon = mongoose.model("coupons", couponSchema);
module.exports = Coupon;