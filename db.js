const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

// Conectarse a la db
const dbConnection = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
};

dbConnection().catch(console.dir);

module.exports = { dbConnection };
