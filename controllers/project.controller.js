const Project = require("../models/project.model");

const getAllProjects = async (req, res) => {
  const allProjects = await Project.find();
  if (allProjects) {
    res.status(200).send(allProjects);
  } else {
    res.status(404).send("No se ha encontrado ningún proyecto");
  }
};

const getProjectById = async (req, res) => {
  const projectId = req.params._id;
  const selectedProject = await Project.findById(projectId);
  if (selectedProject) {
    res.status(200).send(selectedProject);
  } else {
    res.status(404).send("Proyecto no encontrado");
  }
};

const createProject = async (req, res) => {
  const projectInput = req.body;
  const newProject = new Project(projectInput);
  if (newProject) {
    await newProject.save();
    res.status(201).send("Proyecto creado satisfactoriamente");
  } else {
    res.status(400).send("Ha habido un error creando el proyecto");
  }
};

const removeProject = async (req, res) => {
  const projectId = req.params._id;
  const selectedProject = await Project.findByIdAndDelete(projectId);
  if (selectedProject) {
    res.status(200).send("Proyecto borrado correctamente");
  } else {
    res.status(404).send("Ha habido un error borrando el proyecto");
  }
};

module.exports = {
  createProject,
  removeProject,
  getAllProjects,
  getProjectById,
};
