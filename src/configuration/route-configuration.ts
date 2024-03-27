var systemRoutes = require("../routes/system-routes");
var setupRoutes = require("../routes/setup-routes");
var weatherDataRoutes = require("../routes/weather-data-routes");

import express from "express";

export class RouteConfiguration {
  configRoutes(app: express.Application) {
    app.use("/service/system", systemRoutes);
    app.use("/service/login", setupRoutes);
    app.use("/service/home", setupRoutes);
    app.use("/service/products", setupRoutes);
  }
}
