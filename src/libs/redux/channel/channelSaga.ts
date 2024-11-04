import { call, put, takeLatest } from 'redux-saga/effects';
import { channelActions } from './channelSlice';
import { ChannelsService } from '../../api/channels';
import { ChannelData, TChannels } from '../../types/channels';
import { PayloadAction } from '@reduxjs/toolkit';

function* getChannelsSaga(action: PayloadAction<TChannels>) {
  try {
    yield put(channelActions.getChannelsStart());
    const response: ChannelData = yield call(
      ChannelsService.getChannelsOfWorkspace,
      action.payload
    );

    yield put(channelActions.getChannelsSuccess(response));
  } catch (error: any) {
    yield put(channelActions.getChannelsFailure(error.message));
  }
}
function* getChannelSaga(action: PayloadAction<TChannels>) {
  try {
    yield put(channelActions.getChannelStart());
    const response: ChannelData = yield call(
      ChannelsService.getChannelWithId,
      action.payload
    );

    yield put(channelActions.getChannelSuccess(response));
  } catch (error: any) {
    yield put(channelActions.getChannelFailure(error.message));
  }
}
export function* channelSaga() {
  yield takeLatest(channelActions.getChannels.type, getChannelsSaga);
  yield takeLatest(channelActions.getChannel.type, getChannelSaga);
}
