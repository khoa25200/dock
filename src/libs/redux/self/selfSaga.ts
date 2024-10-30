import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';
import { IUser } from '../../types/auth';
import { selfUserActions } from './selfSlice';
import { IListResponse } from '../../types/common';
import { SelfUser } from '../../api/self';
function* GetSelfUser(action: PayloadAction<IUser>) {
  try {
    yield put(selfUserActions.getSelfUser());
    const user: IListResponse = yield call(SelfUser.getUser, action.payload);
    yield put(selfUserActions.getSelfUserSuccess(user));
  } catch (error: any) {
    yield put(selfUserActions.getSelfUserFailed(error.response.data.message));
  }
}

export default function* SelfSaga() {
  yield takeLatest(selfUserActions.getSelfUser.type, GetSelfUser);
}
