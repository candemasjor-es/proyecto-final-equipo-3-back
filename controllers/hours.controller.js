const { Hours } = require("../models/hours.model");

const inputHoursPerUser = async (req, res) => {
  const inputHoursData = req.body;
  const newInputHours = new Hours(inputHoursData);
  if (newInputHours) {
    await newInputHours.save();
    res.status(201).send("Horas añadidas satisfactoriamente");
  } else {
    res.status(400).send("Ha habido un error añadiendo las horas");
  }
};

module.exports = {
  inputHoursPerUser,
};
