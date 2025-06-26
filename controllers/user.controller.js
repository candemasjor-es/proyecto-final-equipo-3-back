const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const login = async (req, res) => {
    const { dni, password } = req.body;
    if (!dni || !password) {
        return res.status(400).send({ msg: "Faltan credenciales" });
    }

    const user = await User.findOne({ dni });
    if (!user) {
        return res.status(404).send({ msg: "Credenciales inválidas" });
    }

    const isPasswordMatch = bcryptjs.compareSync(password, user.password);
    if (!isPasswordMatch) {
        return res.status(404).send({ msg: "Credenciales inválidas" });
    }

    const payload = {
        userId: user._id,
        rol: user.rol,
        dni: user.dni,
    };

    const accessToken = jsonwebtoken.sign(payload, JWT_SECRET, {
        expiresIn: "2h",
    });

    res.status(200).send({ accessToken });
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

const getEmployeeUsers = async (req, res) => {
    const employeeList = await User.find({ rol: "user" });
    if (employeeList) {
        res.status(200).send(employeeList);
    } else {
        res.status(500).send("Ha habido un problema listando los usuarios.");
    }
};

module.exports = { passwordReset, login, getEmployeeUsers };
