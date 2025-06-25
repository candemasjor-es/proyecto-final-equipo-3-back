const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Proyecto europeo", "Proyecto", "Vacaciones", "Festivo", "Otro"],
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
