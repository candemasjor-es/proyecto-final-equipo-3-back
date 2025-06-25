const mongoose = require("mongoose");
const User = require("../models/user.model");

const subprojectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  usersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Subproject", subprojectSchema);
