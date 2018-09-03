import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromMovies from '../reducers/movies.reducer';
import * as fromSearch from '../reducers/movie-search.reducer';

import { Movie } from '../../models/movie.model';

export const getMovieState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.movies
);

export const getMoviesEntities = createSelector(
  getMovieState,
  fromMovies.getMoviesEntities
);

export const getSelectedMovie = createSelector(
  getMoviesEntities,
  fromRoot.getRouterState,
  (entities, router): Movie => {
    return router.state && entities[router.state.params.movieId];
  }
);

export const getAllMovies = createSelector(getMoviesEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getMoviesLoaded = createSelector(
  getMovieState,
  fromMovies.getMoviesLoaded
);

