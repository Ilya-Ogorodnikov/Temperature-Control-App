import { createSlice } from '@reduxjs/toolkit';
import {
  MAX_TEMPERATURE,
  MAX_TEMPERATURE_TEXT_ERROR,
  MIN_TEMPERATURE,
  MIN_TEMPERATURE_TEXT_ERROR,
} from '../../constants/temperature';
import { showToastError } from '../../helpers/toast';
import { ICounterState } from '../../models';

const initialState: ICounterState = {
  temperature: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      if (state.temperature === MAX_TEMPERATURE) {
        showToastError(MAX_TEMPERATURE_TEXT_ERROR);
        return;
      }

      state.temperature += 1;
    },
    decrement(state) {
      if (state.temperature === MIN_TEMPERATURE) {
        showToastError(MIN_TEMPERATURE_TEXT_ERROR);
        return;
      }

      state.temperature -= 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
