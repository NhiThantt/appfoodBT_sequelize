import express from "express";
const likeRoute = express.Router();

import { likeRes, getLikeByRes, getLikeByUser } from "../controllers/likeController.js";

likeRoute.post("/like-res",likeRes);

likeRoute.get ("/get-like-by-res/:resId", getLikeByRes);

likeRoute.get ("/get-like-by-user/:userId", getLikeByUser);




export default likeRoute