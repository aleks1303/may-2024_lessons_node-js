import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleWare } from "../middlewares/auth.middleware";
import { commonMiddleWare } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);
// router.post(
//   "/",
//   commonMiddleWare.validateBody(UserValidator.create),
//   userController.create,
// );
router.get("/me", authMiddleWare.checkAccessToken, userController.getMe);
router.put(
  "/me",
  authMiddleWare.checkAccessToken,
  commonMiddleWare.validateBody(UserValidator.update),
  userController.updateMe,
);
router.delete("/me", authMiddleWare.checkAccessToken, userController.deleteMe);
router.get(
  "/:userId",
  commonMiddleWare.isIdValid("userId"),
  userController.getUserById,
);

export const userRouter = router;
