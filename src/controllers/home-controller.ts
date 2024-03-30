import express from "express";
import { CommonResponse } from "../common/dto/common-response";
import { HomeService } from "../services/home/home-service";
import { HomeServiceImpl } from "../services/home/impl/home-service-impl";

let homeService: HomeService = new HomeServiceImpl();

exports.loadHomeObj = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
let cr = new CommonResponse();
try {
    cr = await homeService.getHomeObj();
    res.send(cr);
  } catch (error) {
    cr.setStatus(false);
    cr.setExtra(error);
    next(error);
  }
};