const express = require('express')
const router = express.Router();
const userController = require("../controller/userController")

router.get("/users",userController.getAllUsers);
router.get("/user/:email",userController.getUser);
router.post("/adduser",userController.createUser);
router.put("/updateuser/:email",userController.editUser);
router.delete("/removeuser/:email",userController.deleteUser);

module.exports=router;