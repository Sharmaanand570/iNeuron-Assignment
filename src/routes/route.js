const express = require('express')
const router = express.Router()
const {createUser, userData, updateUser, deleteUser} = require("../controller/userController")

router.post("/user", createUser)
router.put("/user/:userId", updateUser)
router.get("/user/:userId", userData)
router.delete("/user/:userId", deleteUser)

module.exports = router