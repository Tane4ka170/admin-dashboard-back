import express from "express";
import ctrl from "../../controllers/orders.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";

const router = express.Router();

router.get("/", authenticate, ctrl.listOrders);

export default router;
