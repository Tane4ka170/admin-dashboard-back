import express from "express";
import ctrl from "../../controllers/customers.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";
import isValidId from "../../middlewares/isValidId.mjs";

const router = express.Router();

router.get("/", authenticate, ctrl.listCustomers);

router.get("/:id", authenticate, isValidId, ctrl.getCustomerByID);

export default router;
