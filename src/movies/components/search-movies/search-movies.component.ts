import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromSearchMovies from '../../store';

@Component({
  selector: 'movies-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-description>
            <mat-icon>search</mat-icon>
          </mat-panel-description>
        </mat-expansion-panel-header>
        <form #myNgFormFm="ngForm" class="e-grid--justify-center">
          <mat-form-field>
            <input matInput placeholder="Search" [(ngModel)]="q" name="filter" value="{{ q }}"
                   #name="ngModel">
          </mat-form-field>
        </form>
        <mat-action-row class="e-grid--justify-center">
          <button mat-button color="warn" (click)="search()">Search</button>
          <button mat-button color="primary" (click)="myNgFormFm.resetForm(); reset()">Reset</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>

    <mat-divider></mat-divider>
  `,
})
export class SearchMoviesComponent implements OnInit {
  q: string;

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
  }

  search() {
    this.store.dispatch(new fromStore.SearchMovies(this.q));
  }

  reset() {
    this.store.dispatch(new fromStore.LoadMovies());
  }
}
