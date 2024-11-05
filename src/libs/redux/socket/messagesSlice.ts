import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessagesState {
  messages: string[];
  recipient: string;
  text: string;
  username: string;
}

const initialState: MessagesState = {
  messages: [],
  recipient: '',
  text: '',
  username: 'user1',
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<{ recipient: string; text: string }>) => {},
    receiveMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    updateRecipient: (state, action: PayloadAction<string>) => {
      state.recipient = action.payload;
    },
  },
});

export const { sendMessage, receiveMessage, updateText, updateRecipient } = messagesSlice.actions;
const messagesReducer = messagesSlice.reducer;
export default messagesReducer;

