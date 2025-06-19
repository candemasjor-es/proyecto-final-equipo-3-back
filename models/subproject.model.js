const mongoose = require("mongoose");

const subprojectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usersId: {
    type: Array,
    default: undefined,
  },
});

module.exports = mongoose.model("Subproject", subprojectSchema);
