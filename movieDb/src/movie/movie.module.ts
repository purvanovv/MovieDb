import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
