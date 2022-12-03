import TypeFilm from '../types/film-type';

type InStateListData = {
  genre: string,
  filmsList: TypeFilm[];
  countShowCard: number,
  isDataLoaded: boolean,
  film: TypeFilm | null,
  filmsListFiltered: TypeFilm[],
  favoriteListFilms: TypeFilm[],
  favoriteCount: number,
}

export default InStateListData;
