const express = require("express");
const router = express.Router();

const {
  inputHoursPerUser,
  getHoursPerUser,
} = require("../controllers/hours.controller");

router.post("/", inputHoursPerUser);
router.get("/:_id", getHoursPerUser);

module.exports = router;
