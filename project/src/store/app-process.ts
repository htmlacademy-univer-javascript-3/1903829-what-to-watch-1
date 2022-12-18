import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

const initialState: { error: string | null } = {
  error: null,
};

const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action) => { state.error = action.payload; },
  }
});

const { setError } = appProcess.actions;

export { appProcess, setError };
