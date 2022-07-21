import CONFIG from "@/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authUser = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  if (!headers.authorization) {
    return res.status(401).send("unauthorized");
  }

  const token = headers.authorization.substring(7);

  try {
    const decoded = jwt.verify(token, CONFIG.AUTH.JWT_SECRET!);
  } catch (e) {
    console.error("Failed to auth user", e);
    return res.status(401).send("unauthorized");
  }

  next();
};

export default authUser;
