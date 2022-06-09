import { createUser, getUserById } from "@/service/user";
import { Response, Request, NextFunction } from "express";

export const getPublicUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserById(Number(req.params["id"]));
  if (!user) {
    res.status(404).send("user not found");
    return;
  }
  return res.json(user);
};

export const createUserEndpoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUser("test", "123");

  return res.json({
    ok: true,
  });
};
