const Subproject = require("../models/subproject.model");

const getAllSubprojectsByProjectId = async (req, res) => {
  const projectId = req.params._id;
  const selectedSubprojects = await Subproject.find({ projectId: projectId });
  if (selectedSubprojects.length >= 1) {
    res.status(200).send(selectedSubprojects);
  } else {
    res.status(404).send("No se han encontrado subproyectos en este proyecto");
  }
};

const getSubprojectById = async (req, res) => {
  const subprojectId = req.params._id;
  const selectedSubproject = await Subproject.findById(subprojectId);
  if (selectedSubproject) {
    res.status(200).send(selectedSubproject);
  } else {
    res.status(404).send("Subproyecto no encontrado");
  }
};

const getAllUsersBySubproject = async (req, res) => {
  const subprojectId = req.params._id;
  const usersSubproject = await Subproject.findById(subprojectId)
    .populate("usersId")
    .exec();
  if (!usersSubproject) {
    return res.status(404).send("Subproyecto no encontrado");
  }

  const userList = usersSubproject.usersId;

  res.status(200).send(userList);
};

const createSubproject = async (req, res) => {
  const subprojectInput = req.body;

  const newSubproject = new Subproject(subprojectInput);
  if (newSubproject) {
    await newSubproject.save();
    res.status(201).send("Subproyecto creado satisfactoriamente");
  } else {
    res.status(400).send("Ha habido un error creando el subproyecto");
  }
};

const removeSubroject = async (req, res) => {
  const subprojectId = req.params._id;
  const selectedSubproject = await Subproject.findByIdAndDelete(subprojectId);
  if (selectedSubproject) {
    res.status(200).send("Subroyecto borrado correctamente");
  } else {
    res.status(404).send("Ha habido un error borrando el subproyecto");
  }
};

const addUsersToSubproject = async (req, res) => {
  const subprojectId = req.params._id;
  const userIdsString = req.query.userId;
  const userIdsArray = userIdsString
    .replace(/[\[\]]/g, "")
    .split(",")
    .map((id) => id.trim());
  const addUser = await Subproject.updateMany(
    { _id: subprojectId },
    {
      $addToSet: {
        usersId: { $each: userIdsArray },
      },
    }
  );

  if (addUser) {
    res.status(201).send("Usuario añadido correctamente al subprojecto");
  } else {
    res.status(400).send("Ha habido un problema al añadir al usuario");
  }
};

const removeUserToSubproject = async (req, res) => {};

module.exports = {
  createSubproject,
  removeSubroject,
  addUsersToSubproject,
  removeUserToSubproject,
  getAllSubprojectsByProjectId,
  getAllUsersBySubproject,
  getSubprojectById,
};
