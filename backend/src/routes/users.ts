import {
  createUserEndpoint,
  getPublicUserById,
} from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/create/", createUserEndpoint);
router.get("/:id/", getPublicUserById);

export default router;
