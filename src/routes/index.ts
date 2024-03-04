import { Router } from "express";
import fillOutFormRoutes from "./filloutForm.routes";

const routes = Router();

routes.use("/filloutForm", fillOutFormRoutes);


export default routes;
