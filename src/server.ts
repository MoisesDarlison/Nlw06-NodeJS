import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "./config/configEnv";
import "./config/configDatabase";
import "reflect-metadata";

const { PORT_SERVER = 3000 } = process.env;

import { routerUser } from "./routes/user";
import { routerTag } from "./routes/tag";
const app = express();

app.use(express.json());
app.use(routerUser);
app.use(routerTag);

//Tratamento de Erro
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message || "Error" });
    }
    return response.status(400).json({ error: "Bad request" });
  }
);
app.listen(PORT_SERVER, () => console.log(`Listen in port ${PORT_SERVER}`));
