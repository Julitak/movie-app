import * as fromMovies from '../actions/movie-search.actions';

export interface SearchState {
  loading: boolean;
  error: string;
  query: string;
}

export const initialState: SearchState = {
  loading: false,
  error: '',
  query: '',
};

export function reducer(state = initialState,
                        action: fromMovies.MovieSearchActions): SearchState {
  switch (action.type) {
    case fromMovies.SEARCH_MOVIES: {
      const query = action.payload;

      if (query === '') {
        return {
          loading: false,
          error: '',
          query,
        };
      }

      return {
        ...state,
        loading: true,
        error: '',
        query,
      };
    }


    default: {
      return state;
    }
  }
}


export const getQuery = (state: SearchState) => state.query;

export const getLoading = (state: SearchState) => state.loading;

export const getError = (state: SearchState) => state.error;
