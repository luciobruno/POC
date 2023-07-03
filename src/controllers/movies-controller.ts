import { Request, Response } from "express";
import httpStatus from "http-status";
import { addMovie, deleteMovie, getMovies, updateMovie } from "../services/movies-service";
import { CreateMovie } from "../repositories/movies-repository";

export async function getAllMovies(req: Request, res: Response) {

    const movies = await getMovies()

    res.send(movies.rows)
}

export async function addOneMovie(req: Request, res: Response) {

    const { name, plataform, genre } = req.body as CreateMovie

    try {

        await addMovie({ name, plataform, genre })

        res.sendStatus(httpStatus.CREATED)

    } catch (error) {
        if (error.name === 'DuplicatedMovieError') {
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
}

export async function deleteOneMovie(req: Request, res: Response) {

    const id:number = parseInt(req.params.id)

    try {

        await deleteMovie(id)
        
        res.sendStatus(httpStatus.OK)

    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        if(error.name === 'ConflictError'){
            return res.status(httpStatus.CONFLICT).send(error.message)
        }
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
}

export async function updateOneMovie(req: Request, res: Response) {

    const id:number = parseInt(req.params.id)

    try {

        await updateMovie(id)
        
        res.sendStatus(httpStatus.OK)

    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
}