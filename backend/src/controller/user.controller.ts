import {
  createUser,
  findUserByUsername,
  findUserByUsernameAndPassword,
  getUserById,
} from "@/service/user";
import { compare, hash } from "@/utils/crypt";
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
  const first_name = req.body["first_name"];
  const last_name = req.body["last_name"];
  const username = req.body["username"];
  const password = req.body["password"];

  if (await findUserByUsername(username)) {
    return res.status(409).send("User with that username already exists");
  }

  const hashedPassword = await hash(password);

  const newUser = await createUser(
    first_name,
    last_name,
    username,
    hashedPassword
  );

  return res.json(newUser);
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username = req.body["username"];
  const password = req.body["password"];

  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(404).send("Username not found");
  }

  const isPasswordOK = await compare(password, user.password);

  if (!isPasswordOK) {
    return res.status(401).send("Failed to login user");
  }

  return res.json(user);
};
