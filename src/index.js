import express from "express";

const app = express();
app.use(express.json());

import rootRoutes from "./routes/rootRoutes.js";
app.use("/api",rootRoutes);



import cors from "cors";
app.use(cors());
app.listen(8080);