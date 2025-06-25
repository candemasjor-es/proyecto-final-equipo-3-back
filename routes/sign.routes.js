const express = require("express");
const router = express.Router();
const { getSign, createSign } = require("../controllers/sign.controller");

router.get("/:_id", getSign);
router.post("/", createSign);

module.exports = router;
