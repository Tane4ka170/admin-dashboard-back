import express from "express";
import { validateBody } from "../../middlewares/validateBody.mjs";
import { authenticate } from "../../middlewares/authenticate.mjs";
import { schemas } from "../../models/user.mjs";
import ctrl from "../../controllers/auth.mjs";

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.registerSchema), ctrl.login);
router.get("/user-info", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

export default router;
