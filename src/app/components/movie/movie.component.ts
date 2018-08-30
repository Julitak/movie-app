import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id: any;
  movie: Movie;
  loading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  // --------------------------------------------------------------------------

  ngOnInit() {
    this.id = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    });

  }

  // --------------------------------------------------------------------------

  getData(): void {
    this.api.movies.getOne(this.id).subscribe(
      res => {
        this.movie = res;
        console.log(res);
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );

  }

}
