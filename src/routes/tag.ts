import { Router } from "express";
import { TagCreateController } from "../controllers/tagCreateController";
import { ensureAdmin } from "../middleware/ensureAdmin";

const routerTag = Router();

const { handle } = new TagCreateController();

routerTag.post("/tags", ensureAdmin, handle);

export { routerTag };
