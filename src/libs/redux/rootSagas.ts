import { all, fork } from 'redux-saga/effects';
import { watchGetUser } from './User/sagas';

const rootSaga = function* () {
  yield all([
    fork(watchGetUser),
    // Other forks
  ]);
};

export default rootSaga;
