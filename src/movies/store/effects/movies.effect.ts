import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as movieActions from '../actions/movies.action';
import * as fromServices from '../../services';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private api: fromServices.ApiService
  ) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(movieActions.LOAD_MOVIES).pipe(
    switchMap(() => {
      return this.api
        .movies.get()
        .pipe(
          map(movies => new movieActions.LoadMoviesSuccess(movies)),
          catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  );
}
