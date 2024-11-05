import { all } from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import SelfSaga from './self/selfSaga';
import { channelSaga } from './channel/channelSaga';
import messageSaga from './socket/messageSaga';
export default function* rootSaga() {
  yield all([authSaga(), SelfSaga(), channelSaga(), messageSaga()]);
}
