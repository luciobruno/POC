import { Router } from "express";
import { addOneMovie, deleteOneMovie, getAllMovies, updateOneMovie } from "../controllers/movies-controller";
import validationSchemas from "../middlewares/validation-middleware";
import { movieSchema } from "../schemas/movies-schema";

const moviesRouter = Router();

moviesRouter.get("/movies", getAllMovies);
moviesRouter.post("/movies", validationSchemas(movieSchema), addOneMovie);
moviesRouter.put("/movies/:id", updateOneMovie);
moviesRouter.delete("/movies/:id", deleteOneMovie);

export default moviesRouter;