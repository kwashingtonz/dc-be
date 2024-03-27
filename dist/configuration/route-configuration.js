"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteConfiguration = void 0;
var systemRoutes = require("../routes/system-routes");
var setupRoutes = require("../routes/setup-routes");
var weatherDataRoutes = require("../routes/weather-data-routes");
class RouteConfiguration {
    configRoutes(app) {
        app.use("/service/system", systemRoutes);
        app.use("/service/login", setupRoutes);
        app.use("/service/home", setupRoutes);
        app.use("/service/products", setupRoutes);
    }
}
exports.RouteConfiguration = RouteConfiguration;
