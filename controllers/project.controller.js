const Project = require("../models/project.model");

const getAllProjects = async (req, res) => {};

const getProjectById = async (req, res) => {};

const createProject = async (req, res) => {
  const projectInput = req.body;
  await Project.create(projectInput);

  res.status(201).send("Proyecto creado satisfactoriamente");
};

const removeProject = async (req, res) => {};

module.exports = {
  createProject,
  removeProject,
  getAllProjects,
  getProjectById,
};
