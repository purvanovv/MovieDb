import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/MovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movieDetails: MovieDetails;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.movieService.getMovieDetails(id).subscribe(movie => { console.log(movie); this.movieDetails = movie })
  }
  getUrl() {
    return `url('${this.movieDetails.backdrop_path}')`;
  }

  isChecked(index: number): boolean {
    let voteAverage = this.movieDetails.vote_average;
    if (index <= voteAverage / 2) {
      return true;
    }
    return false;
  }

}
