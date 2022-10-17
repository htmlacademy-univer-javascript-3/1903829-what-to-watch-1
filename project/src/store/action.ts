import { createAction } from '@reduxjs/toolkit';

const changeGenreFilm = createAction<{ genre: string }>('films/changeGenre');
const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');

export { changeGenreFilm, increaseCardCount, resetCardCount };
