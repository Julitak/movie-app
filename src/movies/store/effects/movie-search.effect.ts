import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as movieSearchActions from '../actions/movie-search.actions';
import * as movieActions from '../actions/movies.action';
import * as fromServices from '../../services';
import { of } from 'rxjs';

@Injectable()
export class MovieSearchEffect {
  constructor(
    private actions$: Actions,
    private api: fromServices.ApiService
  ) {}

  @Effect()
  searchMovies$ = this.actions$.ofType(movieSearchActions.SEARCH_MOVIES).pipe(
    switchMap((query) => {
      return this.api
      // @ts-ignore
        .movies.search(query.payload)
        .pipe(
          map(movies => new movieActions.LoadMoviesSuccess(movies)),
          catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  );
}
