import { connection } from "../database/database";
import { Movie } from "../utils/movies-protocol";

export type CreateMovie = Omit<Movie, "id" | "status">;

export function getMoviesDB(){
    const results = connection.query<Movie>(`SELECT * FROM movies ORDER BY id;`)
    return results
};

export function getMovieByNameDB(name:string){
    const results = connection.query<Movie>(`SELECT * FROM movies WHERE name=$1`
    ,[name])
    return results
}

export function addMovieDB({name, plataform, genre}:CreateMovie):Promise<void>{
    connection.query(`INSERT INTO movies (name, plataform, genre)
        VAlUES ($1,$2,$3);
    `, [name, plataform, genre])
    return 
};

export function updateMovieDB(id:number){
    const results = connection.query(`UPDATE movies SET status=true WHERE id=$1`
    ,[id])
    return results
};

export function deleteMovieDB(id:number){
    const results = connection.query(`DELETE FROM movies WHERE id=$1`
    ,[id])
    return results
};

export function getMovieByIdDB(id:number){
    const results = connection.query<Movie>(`SELECT * FROM movies WHERE id=$1;`,
    [id])
    return results
}