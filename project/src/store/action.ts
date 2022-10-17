import { createAction } from '@reduxjs/toolkit';

const changeGenreFilm = createAction<{ genre: string }>('films/changeGenre');

export { changeGenreFilm };
