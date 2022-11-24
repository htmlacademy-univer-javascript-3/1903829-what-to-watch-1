import { NameSpace } from '../../const';
import { State } from '../../types/state';
import TypeFilm from '../../types/film-type';

const getFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsList;
const getFilm = (state: State): TypeFilm | null => state[NameSpace.WelcomeScreen].film;
const getFilteredFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsListFiltered;
const getCountCard = (state: State): number => state[NameSpace.WelcomeScreen].countShowCard;
const getLoadedDataStatus = (state: State): boolean => state[NameSpace.WelcomeScreen].isDataLoaded;
const getCurrentGenre = (state: State): string => state[NameSpace.WelcomeScreen].genre;
const getFavoriteCount = (state: State): number => state[NameSpace.WelcomeScreen].favoriteCount;

export { getFilms, getFilm, getFilteredFilms, getCountCard, getLoadedDataStatus, getCurrentGenre, getFavoriteCount };
