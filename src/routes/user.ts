import { Router } from "express";
import { UserCreateController } from "../controllers/UserCreateController";

const routerUser = Router();

const { handle } = new UserCreateController();

routerUser.post("/users", handle);

export { routerUser };
