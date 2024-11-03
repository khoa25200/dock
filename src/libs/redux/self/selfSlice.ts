import { IUser } from '../../types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelfResponse } from '../../types/self';

export interface PayloadSelfUser {
  infoUser?: SelfResponse;
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
    getSelfUser: (state, action: PayloadAction<IUser>) => {},
    getSelfUserStart: (state) => {
      state.error = false;
      state.success = false;
    },
    getSelfUserSuccess: (state, action: PayloadAction<SelfResponse>) => {
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
