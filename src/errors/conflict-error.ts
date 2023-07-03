import { ApplicationError } from "../utils/movies-protocol";

export function ConflictError(): ApplicationError{
    return {
        name: 'ConflictError',
        message: 'Movie already updated'
    };
}