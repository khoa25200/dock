import { IUser } from '../../types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelfResponse, SelfResponseList } from '../../types/self';

export interface PayloadSelfUser {
  infoUser?: SelfResponse;
  listUser?: SelfResponseList;
  error: boolean;
  success: boolean;
  recipientId: string | null;
}
const initialState: PayloadSelfUser = {
  infoUser: undefined,
  listUser: undefined,
  recipientId: null,
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

    getAllUser: (state) => {},
    getAllUserStart: (state) => {
      state.error = false;
      state.success = false;
    },
    getAllUserSuccess: (state, action: PayloadAction<SelfResponseList>) => {
      state.success = true;
      state.listUser = action.payload;
      state.error = false;
    },
    getAllUserFailed: (state) => {
      state.error = true;
      state.success = false;
    },

    setRecipientId: (state, action: PayloadAction<string | null>) => {
      state.recipientId = action.payload;
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
