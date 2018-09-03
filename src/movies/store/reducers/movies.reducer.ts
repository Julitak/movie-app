import * as fromMovies from '../actions/movies.action';
import { Movie } from '../../models/movie.model';

export interface MovieState {
  search: any;
  entities: { [id: number]: Movie };
  loaded: boolean;
  loading: boolean;
}

export const initialState: MovieState = {
  search: {},
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromMovies.MoviesAction
): MovieState {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromMovies.LOAD_MOVIES_SUCCESS: {
      const movies = action.payload;
      const entities = movies.reduce(
        (entities: { [id: number]: Movie }, movie: Movie) => {
          return {
            ...entities,
            [movie.id]: movie,
          };
        }, {}
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromMovies.LOAD_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getMoviesEntities = (state: MovieState) => state.entities;
export const getMoviesLoading = (state: MovieState) => state.loading;
export const getMoviesLoaded = (state: MovieState) => state.loaded;
