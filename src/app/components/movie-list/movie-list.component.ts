import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[];
  q: string;

  constructor(private api: ApiService, public router: Router) {
  }

  // --------------------------------------------------------------------------

  ngOnInit() {
    this.getData();
  }

  // --------------------------------------------------------------------------
  getData(): void {
    this.api.movies.get().subscribe(
      res => {
        this.movieList = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // --------------------------------------------------------------------------
  search(): void {
    this.api.movies.search(this.q).subscribe(
      res => {
        this.movieList = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
