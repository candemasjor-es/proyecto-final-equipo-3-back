const port = 8080;

const cors = require("cors");
const express = require("express");
const { dbConnection } = require("./db");

const { auth } = require("./middlewares/auth");

const userRoutes = require("./routes/user.routes");
const projectRouter = require("./routes/project.routes");
const subprojectRouter = require("./routes/subproject.routes");
const hoursRouter = require("./routes/hours.routes");

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/", userRoutes);
  app.use("/proyectos", projectRouter);
  app.use("/subproyectos", subprojectRouter);
  app.use("/horas", hoursRouter);

  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });

  dbConnection();
};

main();
