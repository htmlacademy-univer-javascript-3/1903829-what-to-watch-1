//import { TypeGenres } from './types/genre-type';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum GenresList {
  ALL = 'All',
  COMEDIES = 'Comedies',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Dramas',
  HORROR = 'Horror',
  KIDS_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCIFI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}
export const Genres = [ 'All', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers', ];
