import {
  createUserEndpoint,
  getPublicUserById,
  loginUser,
  registerUser,
} from "@/controller/user.controller";
import authUser from "@/middlewares/auth";
import { Router } from "express";

const router = Router();

router.get("/create/", createUserEndpoint); // depricated
router.post("/register", registerUser);
router.post("/login", loginUser);

router.use(authUser);
router.get("/:id/", getPublicUserById);

export default router;
