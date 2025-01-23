import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleWare } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);
router.post(
  "/",
  commonMiddleWare.validateBody(UserValidator.create),
  userController.create,
);
router.get(
  "/:userId",
  commonMiddleWare.isIdValid("userId"),
  userController.getUserById,
);
router.put(
  "/:userId",
  commonMiddleWare.validateBody(UserValidator.update),
  userController.updateUser,
);
router.delete("/:userId", userController.deleteUser);

export const userRouter = router;
