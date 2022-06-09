import * as homeController from "@/controller/home";
import * as userController from "@/controller/user.controller";

import { Router } from "express";
import usersRouter from "../routes/users";

const router = Router();

router.get("/", homeController.getAppInfo);
router.use("/user", usersRouter);

export default router;
