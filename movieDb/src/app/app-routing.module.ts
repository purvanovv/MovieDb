import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from 'src/movie/movies/movies.component';
import { MovieDetailsComponent } from 'src/movie/movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: 'app/home', component: HomeComponent },
  { path: 'app/movies/:type', component: MoviesComponent },
  { path: 'app/movie-details/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
