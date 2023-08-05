const express = require("express");
const { getUsers, getErrors, getForm, user } = require("../controllers/users.controllers");
const router = express.Router();

router.get("/", getUsers)
router.get("/form", getForm);
router.get("/users",user)
router.get("*", getErrors);

module.exports = router;