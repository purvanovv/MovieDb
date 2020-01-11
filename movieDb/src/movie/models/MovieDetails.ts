import { Genre } from './Genre';

export class MovieDetails{
    public id: number;
    public adult: boolean;
    public backdrop_path: string;
    public budget: number;  
    public genres: Genre[];
    public overview: string;
    public popularity: number;
    public poster_path: string;
    public release_date: Date;
    public runtime: number;
    public status: string;
    public tagline: string;
    public title: string;
    public vote_average: number;
    public vote_count: number;
}
