import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { moviesTypeTitleMap } from 'src/app/constants';
import { MoviesResponse } from '../models/MoviesResponse';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: MoviesResponse;
  public typeTitle: string;
  public pages: number[];
  public moviesType: string;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.moviesType = this.activatedRoute.snapshot.paramMap.get('type');
    let beginPage = 1;
    this.initMovies(this.moviesType, beginPage);
    this.typeTitle = moviesTypeTitleMap.get(this.moviesType);
  }

  movieDetails(id: number) {
    this.router.navigate(['/app/movie-details/', id]);
  }

  initPages(currPageIdx: number, totalPages: number) {
    debugger
    let startPageIdx = 1;
    if (currPageIdx - 3 > 1) {
      startPageIdx = currPageIdx - 3;
    }
    let endPageIdx = startPageIdx + 6;
    if (endPageIdx > totalPages) {
      endPageIdx = totalPages;
    }
    let index = 0
    this.pages = [];
    for (let pageIdx = startPageIdx; pageIdx <= endPageIdx; pageIdx++) {
      this.pages[index] = pageIdx
      index++;
    }
  }

  isActive(page: number) {
    if (page == this.movies.page) {
      return true;
    }
    return false;
  }

  changePage(page: number) {
    this.initMovies(this.moviesType, page);
  }

  initMovies(moviesType: string, page: number) {
    this.movieService.getMovies(moviesType, page).pipe(map((data: MoviesResponse) => {
      this.movies = data;
      this.initPages(data.page, data.total_pages);
    })).subscribe();
  }



}
