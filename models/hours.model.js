const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
  id_user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  id_subproject: {
    type: mongoose.Schema.ObjectId,
    ref: "Subproject",
    required: true,
  },

  hours_inputed: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Hours = mongoose.model("Hours", hoursSchema);

module.exports = { Hours };
