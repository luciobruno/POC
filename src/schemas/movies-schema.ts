import Joi from "joi";
import { CreateMovie } from "../repositories/movies-repository";

export const movieSchema = Joi.object<CreateMovie>({
    name: Joi.string().required(),
    plataform: Joi.string().required(),
    genre: Joi.string().required()
});

