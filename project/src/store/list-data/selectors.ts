import {NameSpace} from '../../const';
import {State} from '../../types/state';
import TypeFilm from '../../types/film-type';

const getFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsList;
const getFilteredFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsListFiltered;
const getCountCard = (state: State): number => state[NameSpace.WelcomeScreen].countShowCard;

export { getFilms, getFilteredFilms, getCountCard };
