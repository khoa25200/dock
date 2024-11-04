import { all } from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import SelfSaga from './self/selfSaga';
import { channelSaga } from './channel/channelSaga';
export default function* rootSaga() {
  yield all([authSaga(), SelfSaga(), channelSaga()]);
}
