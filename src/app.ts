const config = require("./config");
const morgan = require("morgan");
const routerColor = require("./router/colorPalette.routes"); 
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("PORT", config.app.port);
app.use(routerColor); 

app.get("/msg", (req: Request, res: Response) => {
    res.json({ msg: "hola mundito!" });
})

export {
    app
}