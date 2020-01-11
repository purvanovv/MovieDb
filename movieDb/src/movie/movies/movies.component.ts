import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';
import { ActivatedRoute } from '@angular/router';
import { moviesTypeTitleMap } from 'src/app/constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Observable<MovieOverview[]>;
  public typeTitle: string

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    let moviesType = this.route.snapshot.paramMap.get('type');
    this.movies = this.movieService.getMovies(moviesType);
    this.typeTitle = moviesTypeTitleMap.get(moviesType);
  }

}
