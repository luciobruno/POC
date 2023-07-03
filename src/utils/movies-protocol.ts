export type Movie = {
    id: number;
    name: string;
    plataform: string;
    genre: string;
    status: boolean;
};

export type ApplicationError = {
    name:string,
    message:string
};