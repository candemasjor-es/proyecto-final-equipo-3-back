const express = require("express");
const router = express.Router();
const {
  getAllUsersBySubproject,
  getAllSubprojectsByProjectId,
  getSubprojectById,
  createSubproject,
  removeSubroject,
  getSubprojectsByUser,
  addUsersToSubproject,
} = require("../controllers/subproject.controller");

router.get("/users/:_id", getAllUsersBySubproject);
router.get("/all/:_id", getAllSubprojectsByProjectId);
router.get("/:_id", getSubprojectById);
router.post("/", createSubproject);
router.patch("/:_id", addUsersToSubproject);
router.delete("/:_id", removeSubroject);
router.get("/all/user/:_id", getSubprojectsByUser);

module.exports = router;
