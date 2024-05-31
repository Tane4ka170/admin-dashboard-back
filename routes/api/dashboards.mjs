import express from "express";
import { authenticate } from "../../middlewares/authenticate.mjs";
import ctrl from "../../controllers/dashboards.mjs";

const router = express.Router();

router.get("/", authenticate, ctrl.listDashboard);

export default router;
