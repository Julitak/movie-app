import { MoviesGuard } from './movies.guard';
import { MovieExistsGuards } from './movie-exists.guard';

export const guards: any[] = [MoviesGuard, MovieExistsGuards];

export * from './movies.guard';
export * from './movie-exists.guard';
