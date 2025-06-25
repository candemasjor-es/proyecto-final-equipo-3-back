const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI, clientOptions);
        console.log("You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
module.exports = { dbConnection };
