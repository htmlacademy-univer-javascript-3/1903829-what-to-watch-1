import { createSlice, createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState: {error: string | null} = {
  error: null
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { setError } = appProcess.actions;

export const redirectToRoute = createAction<string>('app/redirectToRoute');
