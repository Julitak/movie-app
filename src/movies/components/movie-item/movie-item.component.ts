import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'movie-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar style="background: #424242;">
      <mat-icon class="e-m--left-10 back" [routerLink]="'/'">arrow_back</mat-icon>
    </mat-toolbar>
    <mat-divider></mat-divider>
    <movie-detail
      [movie]="movie$ | async"
    ></movie-detail>
  `,
})
export class MovieItemComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.movie$ = this.store.select(fromStore.getSelectedMovie);
  }

  ngOnInit() {
  }
}
