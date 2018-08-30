import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: LayoutComponent, children: [
        {path: '', redirectTo: 'movie-list', pathMatch: 'full'},
        {path: 'movie-list', component: MovieListComponent},
        { path: 'movie-list/movie/:id', component: MovieComponent},
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
