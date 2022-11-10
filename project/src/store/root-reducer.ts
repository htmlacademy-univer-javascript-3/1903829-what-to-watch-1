import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';
import { userProcess } from './user-processes/user-process';
import { MainData } from './list-data/list-data';
import { filmData } from './film-data/film-data';

export const rootReducer = combineReducers({
  [NameSpace.WelcomeScreen]: MainData.reducer,
  [NameSpace.FilmScreen]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
