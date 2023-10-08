import express from "express";
import likeRoute from "./likeRoutes.js";
import rateRoute from "./rateRoutes.js";
import orderRoute from "./orderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/like",likeRoute);
rootRoutes.use("/rate",rateRoute);
rootRoutes.use("/order",orderRoute)


// rootRoutes.use("/user",userRoute)
export default rootRoutes