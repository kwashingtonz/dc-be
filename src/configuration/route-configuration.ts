import express from "express";

var systemRoutes = require("../routes/system-routes");
var loginRoutes = require("../routes/login-routes");
var homeRoutes = require("../routes/home-routes");
var productRoutes = require("../routes/product-routes");
export class RouteConfiguration {
  configRoutes(app: express.Application) {
    app.use("/service/system", systemRoutes);
    app.use("/service/login", loginRoutes);
    app.use("/service/home", homeRoutes);
    app.use("/service/products", productRoutes);
  }
}