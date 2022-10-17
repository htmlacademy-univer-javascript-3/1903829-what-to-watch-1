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
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCIFI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}

// export const GENRES_LIST: TypeGenres[] = [
//   {
//     titleGenre: 'All',
//     id: 1,
//   },
//   {
//     titleGenre: 'Comedies',
//     id: 1,
//   },
//   {
//     titleGenre: 'Crime',
//     id: 2,
//   },
//   {
//     titleGenre: 'Documentary',
//     id: 3.
//   },
//   {
//     titleGenre: 'Dramas',
//     id: 4,
//   },
//   {
//     titleGenre: 'Horror',
//     id: 5,
//   },
//   {
//     titleGenre: 'Kids & Family',
//     id: 6,
//   },
//   {
//     titleGenre: 'Romance',
//     id: 7
//   },
//   {
//     titleGenre: 'Sci-Fi',
//     id: 8
//   },
//   {
//     titleGenre: 'Thrillers',
//     id: 9
//   },
// ];
