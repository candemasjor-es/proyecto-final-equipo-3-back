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

const getHoursPerUser = async (req, res) => {
  const userId = req.params._id;
  const { year, month } = req.query;

  if (!year || !month) {
    return res
      .status(400)
      .send("Por favor, proporciona el año y el mes para filtrar.");
  }

  try {
    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10);

    if (isNaN(yearInt) || isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
      return res
        .status(400)
        .send("El año o el mes proporcionados no son válidos.");
    }

    const startDate = new Date(yearInt, monthInt - 1, 1);
    const endDate = new Date(yearInt, monthInt, 1);

    const query = {
      id_user: userId,
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    };

    const hoursList = await Hours.find(query);

    if (hoursList && hoursList.length > 0) {
      res.status(200).send(hoursList);
    } else {
      res
        .status(404)
        .send(
          `No se han encontrado horas inputadas para este usuario en ${month}/${year}.`
        );
    }
  } catch (error) {
    console.error("Error al buscar horas:", error);
    res.status(500).send("Ocurrió un error en el servidor.");
  }
};

module.exports = {
  inputHoursPerUser,
  getHoursPerUser,
};
