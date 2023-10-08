import express from "express";
import { rateRes, getRateByRes,getRateByUser } from "../controllers/rateController.js";

const rateRoute = express.Router()

rateRoute.post("/rate-res",rateRes);

rateRoute.get("/get-rate-by-res/:resId", getRateByRes);

rateRoute.get("/get-rate-by-user/:userId", getRateByUser);

export default rateRoute;