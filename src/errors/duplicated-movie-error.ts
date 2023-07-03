import { ApplicationError } from "../utils/movies-protocol";

export function duplicatedMovieError(): ApplicationError{
    return {
        name: 'DuplicatedMovieError',
        message: 'Movie already registered'
    };
}