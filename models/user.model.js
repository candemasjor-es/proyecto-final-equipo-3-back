const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../config");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    surnames: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: {
        type: String,
        required: true,
        enum: ["user", "manager"],
        default: "user",
    },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

