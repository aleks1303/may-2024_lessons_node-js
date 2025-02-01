import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { commonMiddleWare } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();
router.post(
  "/sign-up",
  commonMiddleWare.validateBody(UserValidator.create),
  authController.signUp,
);

router.post(
  "/sign-in",
  // commonMiddleWare.validateBody(UserValidator.create),
  authController.signIn,
);

export const authRouter = router;
