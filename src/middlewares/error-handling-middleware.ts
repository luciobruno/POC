import { Request, Response, NextFunction} from "express";
import httpStatus from "http-status";
import { ApplicationError } from "../utils/movies-protocol";

export default function handleApplicationErrors(
    err: ApplicationError | Error,
    req: Request,
    res: Response,
    next: NextFunction
){
    if(err.name === 'NotFoundError'){
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        })
    }
    if(err.name === 'DuplicatedMovieError'){
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        })
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        name:'InternalServerError',
        message: 'Internal Server Error',
    })
}