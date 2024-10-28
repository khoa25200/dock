import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/auth';

export interface SignInPayload {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: IUser;
  error?: string | null;
  isRegister?: boolean;
}

const initialState: SignInPayload = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IUser>) {},
    signInStart: (state) => {
      state.logging = true;
    },
    signInSuccess(state, action: PayloadAction<IUser>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.logging = false;
    },
    signInFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.error = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
