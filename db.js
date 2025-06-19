const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

// Conectarse a la db
const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Base de datos Conectado con exito");
    } catch (error) {
        console.error(error);
        throw new Error("Error al conectarse la base de datos");
    }
};

module.exports = { dbConnection };
