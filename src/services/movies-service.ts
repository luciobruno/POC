import { ConflictError } from "../errors/conflict-error";
import { duplicatedMovieError } from "../errors/duplicated-movie-error";
import { notFoundError } from "../errors/not-found-error";
import { CreateMovie, addMovieDB, deleteMovieDB, getMovieByIdDB, getMovieByNameDB, getMoviesDB, updateMovieDB } from "../repositories/movies-repository";

export async function getMovies(){
    const movies = await getMoviesDB()
    return movies
}

export async function addMovie({name, plataform, genre}:CreateMovie):Promise<void>{

    await validateUniqueMovie(name)

    await addMovieDB({name, plataform, genre})
}

export async function validateUniqueMovie(name:string){
    const movie = await getMovieByNameDB(name)
    if(movie.rowCount !== 0){
        throw duplicatedMovieError()
    }
}

export async function deleteMovie(id:number):Promise<void>{
    const movie = await getMovieByIdDB(id)
    if(movie.rowCount === 0){
        throw notFoundError()
    }
    await deleteMovieDB(id)
}

export async function updateMovie(id:number):Promise<void>{
    const movie = await getMovieByIdDB(id)
    if(movie.rowCount === 0){
        throw notFoundError()
    }
    if(movie.rows[0].status === true){
        throw ConflictError()
    }
    await updateMovieDB(id)
}