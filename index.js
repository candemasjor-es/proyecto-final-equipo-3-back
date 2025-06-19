const port = 8080;

const cors = require("cors");
const express = require("express");

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    //app.use("/", console.log("test"));

    app.listen(port, () => {
        console.log(`App listening on ${port}`);
    });
};

main();
