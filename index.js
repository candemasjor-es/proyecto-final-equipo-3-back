const port = 8080;

const cors = require("cors");
const express = require("express");
const path = require("path");
const { dbConnection } = require("./db");

const { auth } = require("./middlewares/auth");

const userRoutes = require("./routes/user.routes");
const signRoutes = require("./routes/sign.routes");
const projectRouter = require("./routes/project.routes");
const subprojectRouter = require("./routes/subproject.routes");
const hoursRouter = require("./routes/hours.routes");

const main = async () => {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.use(cors());
  app.use(express.json());
  app.use("/", userRoutes);
  app.use("/proyectos", projectRouter);
  app.use("/subproyectos", subprojectRouter);
  app.use("/horas", hoursRouter);
  app.use("/api/firmas", signRoutes);
  app.use("/firmas", express.static(path.join(__dirname, "public/firmas")));

  dbConnection();

  dbConnection();
};

main();
