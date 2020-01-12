import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieOverview } from './models/MovieOverview';
import { map } from 'rxjs/operators';
import { MovieDetails } from './models/MovieDetails';
import { MoviesResponse } from './models/MoviesResponse';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  apiKey = '71e7f89fd3f5f5e0ab423927703db86a'
  movies(type: string, page: number) {
    return `https://api.themoviedb.org/3/movie/${type}?api_key=${this.apiKey}&language=en-US&page=${page}`;
  }
  movieDetails(id: number): string {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`
  };

  constructor(private httpClient: HttpClient) { }


  public getMovies(type: string, page: number): Observable<MoviesResponse> {
    return this.httpClient.get<MoviesResponse>(this.movies(type, page)).pipe(map((response: MoviesResponse) => {
      let movies = response.results;
      movies.forEach(movie => {
        let overview: string = movie['overview'];
        if (overview.length > 100) {
          overview = overview.substring(0, 100) + '...';
          movie['overview'] = overview;
        }
        let posterpath: string = movie['poster_path'];
        posterpath = `https://image.tmdb.org/t/p/w500/${posterpath}`;
        movie['poster_path'] = posterpath;
      });
      return response;
    }));
  }

  public getMovieDetails(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(this.movieDetails(id)).pipe(map((movie: MovieDetails) => {
      let posterpath = movie.poster_path;
      let backdropPath = movie.backdrop_path;
      posterpath = `https://image.tmdb.org/t/p/w500/${posterpath}`;
      backdropPath = `https://image.tmdb.org/t/p/w500/${backdropPath}`;
      movie.backdrop_path = backdropPath;
      movie.poster_path = posterpath;
      return movie;
    }));
  }
}
