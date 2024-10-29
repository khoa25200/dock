import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, put, call, take, fork } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { IUser } from '../../types/auth';
import { AccountUser } from '../../api/auth';
import { IListResponse } from '../../types/common';

function* handleSignIn(action: PayloadAction<IUser>) {
  try {
    yield put(authActions.signInStart());
    const user: IListResponse = yield call(
      AccountUser.loginUser,
      action.payload
    );

    if (user && user.data && user.data['access-token']) {
      localStorage.setItem('tk', user.data['access-token']);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      throw new Error('Token not found');
    }

    yield put(authActions.signInSuccess(user));
  } catch (error: any) {
    yield put(authActions.signInFailed(error.response.data.message));
  }
}
function* handleSignOut() {
  localStorage.removeItem('tk');
  localStorage.removeItem('isLoggedIn');
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem('tk');
    if (!isLoggedIn) {
      const action: PayloadAction<IUser> = yield take(authActions.signIn.type);
      yield fork(handleSignIn, action);
    }
    yield take(authActions.logout.type);
    yield call(handleSignOut);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
}
