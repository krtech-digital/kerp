import {
  createUserEndpoint,
  getPublicUserById,
  registerUser,
} from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/create/", createUserEndpoint);
router.get("/:id/", getPublicUserById);
router.post("/register", registerUser);

export default router;
