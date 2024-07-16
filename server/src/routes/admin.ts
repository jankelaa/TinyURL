import { Router } from "express";
import { getPopularDomains } from "../controllers/adminController.js";

const router = Router();

router.get("/popular-domains", getPopularDomains);

export { router as adminRouter };
