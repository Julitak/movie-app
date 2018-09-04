import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-list',
  template: `
    <div>
      <mat-grid-list [cols]="breakpoint" rowHeight="500" (window:resize)="onResize($event)">
        <mat-grid-tile *ngFor="let movie of (movies$ | async)" colspan="1" rowspan="1">
          <mat-card [routerLink]="[movie.id]" class="animation-scale">
            <div class="e-grid--column-center">
              <img [src]="'../../../assets/images/movie-covers/'+ movie.img" [alt]="movie.name" class="e-max-h--300"
                   style="object-fit: contain">
              <mat-card-title class="e-m--top-15">{{movie.name}}</mat-card-title>
              <mat-card-subtitle *ngIf="movie.rate">Rating: {{movie.rate}}</mat-card-subtitle>
            </div>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  breakpoint: number;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.movies$ = this.store.select(fromStore.getAllMovies);
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 3;
  }
}
