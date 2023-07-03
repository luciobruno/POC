import express, { Request, Response } from "express";
import moviesRouter from "./routers/movies-routes";
import handleApplicationErrors from "./middlewares/error-handling-middleware";

const app = express();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.send("OK")
});

app.use(moviesRouter);
app.use(handleApplicationErrors)

const port: Number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
});