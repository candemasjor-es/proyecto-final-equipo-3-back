const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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

const User = mongoose.model("User", userSchema);

async function createUser() {
    await User.create({
        dni: "20832411T",
        contrasena: "12345",
        nombre: "Nombre",
        apellidos: "Apellidos",
        email: "correo@example.com",
        rol: "user",
    });
}
createUser();

module.exports = { User };
