import { IListResponse } from '../../types/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PayloadSelfUser {
  infoUser?: IListResponse;
  error: boolean;
  success: boolean;
}
const initialState: PayloadSelfUser = {
  infoUser: undefined,
  error: false,
  success: false,
};

const selfUserSlice = createSlice({
  name: 'self',
  initialState,
  reducers: {
    getSelfUser: (state) => {
      state.error = false;
      state.success = false;
    },
    getSelfUserSuccess: (state, action: PayloadAction<IListResponse>) => {
      state.success = true;
      state.infoUser = action.payload;
      state.error = false;
    },
    getSelfUserFailed: (state) => {
      state.error = true;
      state.success = false;
    },
  },
});

// Actions
export const selfUserActions = selfUserSlice.actions;

// Selectors
export const selectSelfUser = (state: any) => state.self;
// Reducer
const selfUserReducer = selfUserSlice.reducer;
export default selfUserReducer;
