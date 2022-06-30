import { createUser, getUserById } from "@/service/user";
import { Response, Request, NextFunction } from "express";

export const getPublicUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Hej, tu sam");

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
  // const user = await createUser("test", "123");

  return res.json({
    ok: true,
  });
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("register user");
  const first_name = req.body["first_name"];
  const last_name = req.body["last_name"];
  const username = req.body["username"];
  const password = req.body["password"];

  const newUser = await createUser(first_name, last_name, username, password);

  return res.json(newUser);
};
