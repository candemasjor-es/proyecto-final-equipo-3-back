const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  rol: {
    type: String,
    required: true,
    enum: ["user", "manager"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
