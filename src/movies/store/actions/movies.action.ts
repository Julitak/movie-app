import { Action } from '@ngrx/store';

import { Movie } from '../../models/movie.model';

// load movies
export const LOAD_MOVIES = '[Products] Load Movies';
export const LOAD_MOVIES_FAIL = '[Products] Load Movies Fail';
export const LOAD_MOVIES_SUCCESS = '[Products] Load Movies Success';

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;
}

export class LoadMoviesFail implements Action {
  readonly type = LOAD_MOVIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {}
}


// action types
export type MoviesAction =
  | LoadMovies
  | LoadMoviesFail
  | LoadMoviesSuccess;
