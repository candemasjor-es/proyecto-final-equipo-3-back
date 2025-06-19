const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  removeProject,
} = require("../controllers/project.controller");

router.get("/", getAllProjects);
router.get("/", getProjectById);
router.post("/", createProject);
router.delete("/", removeProject);

module.exports = router;
