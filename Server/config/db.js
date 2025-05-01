const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const url = process.env.MONGO_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database is Connected.");
    }
    catch (err) {
        console.log("Error: ", err.message);
    }
}

module.exports = connectDB;