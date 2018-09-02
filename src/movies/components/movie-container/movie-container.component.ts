import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'movie-container',

  template: `
    <movies-search></movies-search>
    <movie-list></movie-list>
  `,
})
export class MovieContainerComponent implements OnInit {

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
  }
}
