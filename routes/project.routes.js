const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  removeProject,
} = require("../controllers/project.controller");

router.get("/", getAllProjects);
router.get("/:_id", getProjectById);
router.post("/", createProject);
router.delete("/:_id", removeProject);

module.exports = router;
