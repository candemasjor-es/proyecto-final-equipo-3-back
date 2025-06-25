const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const login = async (req, res) => {
    // Recibir username y password
    const { dni, password } = req.body;
    if (!dni || !password) {
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
    const isPasswordMatch = bcryptjs.compareSync(password, user.password);
    if (!isPasswordMatch) {
        res.status(404).send({ msg: "INVALID_CREDENTIALS" });
        return;
    }
    // USUARIO Y PASSWORD VALIDO
    // Generar un token con el userId en el payload .sign()
    // y un jwt secret
    const accessToken = jsonwebtoken.sign({ userId: user._id }, JWT_SECRET);
    res.send({
        accessToken,
        rol: user.rol,
        dni: user.dni,
    });
};
const passwordReset = async (req, res) => {
    try {
        const { newPassword } = req.body;
        const userId = req.user._id;

        // Hash new password
        const hashedPassword = await bcryptjs.hash(newPassword, 10);

        // Update user password
        await User.findByIdAndUpdate(userId, {
            password: hashedPassword,
        });

        res.status(200).json({
            success: true,
            message: "Password updated successfully",
        });
    } catch (error) {
        console.error("Password reset error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
module.exports = { passwordReset, login };
