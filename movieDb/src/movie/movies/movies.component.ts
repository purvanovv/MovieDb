import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { moviesTypeTitleMap } from 'src/app/constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Observable<MovieOverview[]>;
  public typeTitle: string

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let moviesType = this.activatedRoute.snapshot.paramMap.get('type');
    this.movies = this.movieService.getMovies(moviesType);
    this.typeTitle = moviesTypeTitleMap.get(moviesType);
  }

  movieDetails(id: number){
    this.router.navigate(['/app/movie-details/',id]);
  }

}
