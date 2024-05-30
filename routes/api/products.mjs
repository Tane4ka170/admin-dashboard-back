import express from "express";
import ctrl from "../../controllers/products.mjs";
import validateBody from "../../middlewares/validateBody.mjs";
import isEmptyBody from "../../middlewares/isEmptyBody.mjs";
import isValidId from "../../middlewares/isValidId.mjs";
import { schemas } from "../../models/product.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";

const router = express.Router();

router.get("/", authenticate, ctrl.listProducts);

router.get("/:id", authenticate, isValidId, ctrl.getProductById);

router.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(schemas.addSchema),
  ctrl.addProduct
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateSchema),
  ctrl.updateProduct
);

router.delete("/:id", authenticate, isValidId, ctrl.removeProduct);

export default router;
