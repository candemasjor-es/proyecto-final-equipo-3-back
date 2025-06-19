const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};
// Conectarse a la db
const dbConnection = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(MONGO_URI, clientOptions);
        console.log("You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = { dbConnection };
