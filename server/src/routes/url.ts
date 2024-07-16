import { Router } from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
} from "../controllers/urlController.js";

const router = Router();

router.post("/shorten", createShortUrl);
router.get("/:shortUrlId", redirectToOriginalUrl);

export { router as urlRouter };
