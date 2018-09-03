import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';


import { take } from 'rxjs/operators';

@Component({
  selector: 'movie-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <movies-search [q$]="q$ | async"></movies-search>
    <movie-list></movie-list>
  `,
})
export class MovieContainerComponent implements OnInit {
  q$: Observable<any>;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.q$ = store.pipe(
      select(store => store.movies.search.query),
      take(1)
    );
  }

  ngOnInit() {
  }

}
