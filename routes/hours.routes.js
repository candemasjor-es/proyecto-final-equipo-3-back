const express = require("express");
const router = express.Router();

const { inputHoursPerUser } = require("../controllers/hours.controller");

router.post("/", inputHoursPerUser);

module.exports = router;
