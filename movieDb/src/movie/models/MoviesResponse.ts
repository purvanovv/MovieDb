import { MovieOverview } from './MovieOverview';

export class MoviesResponse {
    public page: number;
    public total_results: number;
    public total_pages: number;
    public results: MovieOverview[];
}