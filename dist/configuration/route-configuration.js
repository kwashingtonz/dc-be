"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteConfiguration = void 0;
var systemRoutes = require("../routes/system-routes");
var loginRoutes = require("../routes/login-routes");
var homeRoutes = require("../routes/home-routes");
var productRoutes = require("../routes/product-routes");
class RouteConfiguration {
    configRoutes(app) {
        app.use("/service/system", systemRoutes);
        app.use("/service/login", loginRoutes);
        app.use("/service/home", homeRoutes);
        app.use("/service/products", productRoutes);
    }
}
exports.RouteConfiguration = RouteConfiguration;
