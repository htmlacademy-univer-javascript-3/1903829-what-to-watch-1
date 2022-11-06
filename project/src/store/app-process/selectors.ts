import { State } from '../../types/state';
import { NameSpace } from '../../const';
import TypeFilm from '../../types/film-type';
import Reviews from '../../types/reviews';

const getError = (state: State): string | null => state[NameSpace.App].error;
const getFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsList;
const getFilm = (state: State): TypeFilm | null => state[NameSpace.WelcomeScreen].film;
const getFilteredFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsListFiltered;
const getCountCard = (state: State): number => state[NameSpace.WelcomeScreen].countShowCard;
const getChooseTab = (state: State): string => state[NameSpace.FilmScreen].filmTab;
const getReviews = (state: State): Reviews => state[NameSpace.WelcomeScreen].reviews;
const getIsLoaded = (state: State): boolean => state[NameSpace.WelcomeScreen].isDataLoaded;

export { getError, getFilms, getFilm, getFilteredFilms, getCountCard, getChooseTab, getReviews, getIsLoaded };
