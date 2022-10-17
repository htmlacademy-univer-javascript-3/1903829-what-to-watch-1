import { createAction } from '@reduxjs/toolkit';

export const changeGenreFilm = createAction<{ genre: string }>('films/changeGenre');

