const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const couponRoutes = require("./routes/couponRoutes")
const userRoutes = require("./routes/userRoutes");
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/api/v1/",userRoutes);
app.use("/api/v1/",couponRoutes);
app.listen(Port, () =>{
    console.log(`Server Started at port : ${Port} `);
})
