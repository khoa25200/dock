import { takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from './authSlice';
import { IUser } from '../../types/auth';
import { AccountUser } from '../../api/auth';

function* handleSignIn(action: PayloadAction<IUser>) {
  try {
    yield put(authActions.signInStart());
    const user: IUser = yield call(AccountUser.loginUser, action.payload);
    yield put(authActions.signInSuccess(user));
  } catch (error: any) {
    yield put(authActions.signInFailed(error.response.data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.signIn.type, handleSignIn);
}
