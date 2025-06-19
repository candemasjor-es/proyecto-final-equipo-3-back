const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const login = async (req, res) => {
    // Recibir username y password
    const { dni, contrasena } = req.body;
    if (!dni || !contrasena) {
        res.status(404).send({ msg: "Missing username or password" });
        return;
    }
    // Validar que el username exista
    const user = await User.findOne({ dni: dni });
    // {objeto usuario} si existe, null si no existe
    if (!user) {
        res.status(404).send({ msg: "INVALID_CREDENTIALS" });
        return;
    }
    // Vaidar que el password de ese username sea el mismo
    // que el recibido
    const isPasswordMatch = bcryptjs.compareSync(contrasena, user.contrasena);
    if (!isPasswordMatch) {
        res.status(404).send({ msg: "INVALID_CREDENTIALS" });
        return;
    }
    // USUARIO Y PASSWORD VALIDO
    // Generar un token con el userId en el payload .sign()
    // y un jwt secret
    const accessToken = jsonwebtoken.sign({ userId: user._id }, JWT_SECRET);
    res.send({ accessToken });
};
module.exports = { login };
