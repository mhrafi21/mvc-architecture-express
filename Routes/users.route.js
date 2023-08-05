const express = require("express");
const { getUsers, getErrors } = require("../controllers/users.controllers");
const router = express.Router();

router.get("/",getUsers)

router.get("*", getErrors);

module.exports = router;