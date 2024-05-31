import express from "express";
import ctrl from "../../controllers/suppliers.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";
import isEmptyBody from "../../middlewares/isEmptyBody.mjs";
import isValidId from "../../middlewares/isValidId.mjs";
import validateBody from "../../middlewares/validateBody.mjs";
import { schemas } from "../../models/supplier.mjs";
const router = express.Router();

router.get("/", authenticate, ctrl.listSuppliers);

router.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(schemas.addSchema),
  ctrl.addSupplier
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateSchema),
  ctrl.updateSupplier
);

export default router;
