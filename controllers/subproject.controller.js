const Subproject = require("../models/project.model");

const getAllSubprojectsByProjectId = async (req, res) => {};

const getSubprojectById = async (req, res) => {};

const getAllUsersBySubproject = async (req, res) => {};

const createSubproject = async (req, res) => {};

const removeSubroject = async (req, res) => {};

const addUserToSubproject = async (req, res) => {};

const removeUserToSubproject = async (req, res) => {};

module.exports = {
  createSubproject,
  removeSubroject,
  addUserToSubproject,
  removeUserToSubproject,
  getAllSubprojectsByProjectId,
  getAllUsersBySubproject,
  getSubprojectById,
};
