export interface GenresResponse {
    [x: string]: any;
    genres: Genre[];
}

export interface Genre {
    name: string;
    id: string;
}