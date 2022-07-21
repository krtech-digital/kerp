import * as homeController from "@/controller/home";
import * as userController from "@/controller/user.controller";
import authUser from "@/middlewares/auth";

import { Router } from "express";
import usersRouter from "../routes/users";

const router = Router();

router.use("/user", usersRouter);
router.use(authUser);
router.get("/", homeController.getAppInfo);

export default router;
