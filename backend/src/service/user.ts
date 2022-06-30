import { db } from "./db";

export const getUserById = async (id: number) => {
  return await db.table("users").where("id", id).first();
};

export const createUser = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string
) => {
  return await db.table("users").insert(
    {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
    },
    ["*"]
  );
};
