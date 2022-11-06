import TypeFilm from './film-type';
import Reviews from './reviews';

export type FilmData = {
  film: TypeFilm | null,
  filmTab: string,
  comments: Reviews | null,
  isLoaded: boolean | null,
  isFounded: boolean | null,
}
