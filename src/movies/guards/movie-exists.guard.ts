import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';
import * as fromStore from '../store';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieExistsGuards implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.movieId, 10);
        return this.hasMovie(id);
      })
    );
  }

  hasMovie(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getMoviesEntities)
      .pipe(
        map((entities: { [key: number]: Movie }) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getMoviesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadMovies());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
