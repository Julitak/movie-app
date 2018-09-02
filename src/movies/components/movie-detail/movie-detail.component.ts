import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'movie-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <mat-card class="e-grid">
        <img [src]="'../../../assets/images/movie-covers/'+ movie.img" [alt]="movie.name" class="e-max-h--300"
        style="object-fit: contain">
        <div class="e-grid--column-center e-m--left-50">
          <mat-card-title class="e-m--top-15">{{movie.name }}</mat-card-title>
          <mat-card-subtitle *ngIf="movie.rate ">Rating: {{movie.rate}}</mat-card-subtitle>
          <mat-card-subtitle *ngIf="movie.description">Description: {{movie.description }}</mat-card-subtitle>
          <mat-card-subtitle *ngIf="movie.length">Length: {{movie.length}}</mat-card-subtitle>
          <mat-card-subtitle *ngIf="movie.length">Genres: <span
            *ngFor="let genre of movie.genres">{{ genre + ', ' }} </span></mat-card-subtitle>
        </div>
      </mat-card>
    </div>
  `,
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
  }
}
