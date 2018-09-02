import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './movies.reducer';
import * as fromMovieSearch from './movie-search.reducer';

export interface ProductsState {
  movies: fromMovies.MovieState;
  search: fromMovieSearch.SearchState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  movies: fromMovies.reducer,
  search: fromMovieSearch.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'movies'
);

export const getSearchState = createFeatureSelector<ProductsState>(
  'search'
);
