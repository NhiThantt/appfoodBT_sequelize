import express  from "express";
import orderFood from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/order-food",orderFood)


export default orderRoute;