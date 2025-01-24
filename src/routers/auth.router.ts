import { Router } from "express";

import { authController } from "../controllers/auth.controller";

const router = Router();

router.post(
  "/sign-in",
  // commonMiddleWare.validateBody(UserValidator.create),
  authController.signIn,
);

export const authRouter = router;
