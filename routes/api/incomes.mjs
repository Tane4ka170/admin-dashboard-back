import express from "express";
import ctrl from "../../controllers/incomes.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";

const router = express.Router();

router.get("/", authenticate, ctrl.listIncome);

export default router;
