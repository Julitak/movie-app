import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export const SEARCH_MOVIES = '[Find Book Page] Search Movies';
export const SEARCH_MOVIES_SUCCESS = '[Movies] Search Movies Success';
export const SEARCH_MOVIES_FAILURE = '[Movies] Search Movies Failure';

export class SearchMovies implements Action {
  readonly type = SEARCH_MOVIES;

  constructor(public payload: any) {
  }
}

export class SearchMoviesSuccess implements Action {
  readonly type = SEARCH_MOVIES_SUCCESS;

  constructor(public payload: any) {
  }
}

export class SearchMoviesFailure implements Action {
  readonly type = SEARCH_MOVIES_FAILURE;

  constructor(public payload: any) {
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MovieSearchActions = SearchMovies | SearchMoviesSuccess | SearchMoviesFailure;
