import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChannelState, ChannelData, TChannels } from '../../types/channels';
const initialState: ChannelState = {
  channelData: null,
  channelCurrent: null,
  loading: false,
  error: null,
};

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    // get channels
    getChannels: (state, action: PayloadAction<TChannels>) => {},
    getChannelsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getChannelsSuccess: (state, action: PayloadAction<ChannelData>) => {
      state.channelData = action.payload;
      state.loading = false;
      state.error = null;
    },
    getChannelsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get channel
    getChannel: (state, action: PayloadAction<TChannels>) => {},
    getChannelStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getChannelSuccess: (state, action: PayloadAction<ChannelData>) => {
      state.channelCurrent = action.payload;
      state.loading = false;
      state.error = null;
    },
    getChannelFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const channelActions = channelSlice.actions;
const channelReducer = channelSlice.reducer;
export default channelReducer;
