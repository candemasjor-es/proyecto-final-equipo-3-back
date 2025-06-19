const express = require("express");
const router = express.Router();
const {
  getAllUsersBySubproject,
  getAllSubprojectsByProjectId,
  getSubprojectById,
  createSubproject,
  removeSubroject,
  removeUserToSubproject,
  addUserToSubproject,
} = require("../controllers/subproject.controller");

router.get("/", getAllUsersBySubproject);
router.get("/", getAllSubprojectsByProjectId);
router.get("/", getSubprojectById);
router.post("/", createSubproject);
router.post("/", addUserToSubproject);
router.delete("/", removeSubroject);
router.delete("/", removeUserToSubproject);
