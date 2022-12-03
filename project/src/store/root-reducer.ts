import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process';
import { userProcess } from './user-process';
import { mainData } from './list-data';
import { filmData } from './film-data';

export const rootReducer = combineReducers({
  [NameSpace.WelcomeScreen]: mainData.reducer,
  [NameSpace.FilmScreen]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
