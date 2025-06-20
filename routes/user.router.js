const express = require("express");
const router = express.Router();
const { login, passwordReset } = require("../controllers/user.controller");
const { auth } = require("../middlewares/auth");

router.post("/login", login);
router.post("/reset-password", auth, passwordReset);

module.exports = router;
