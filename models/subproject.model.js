const mongoose = require("mongoose");

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

const Subproject = mongoose.model("Subproject", subprojectSchema);

module.exports = { Subproject };
