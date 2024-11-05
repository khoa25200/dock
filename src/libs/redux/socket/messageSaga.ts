import { call, put, takeLatest, takeEvery, select, take } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import io, { Socket } from 'socket.io-client';
import { sendMessage, receiveMessage } from './messagesSlice';

const SOCKET_SERVER_URL = import.meta.env.DEV ? 'http://localhost:3334' : 'http://47.129.183.26:3001';

function connectSocket(username: string): Socket {
  return io(SOCKET_SERVER_URL, {
    transports: ['websocket'],
    path: '/websockets',
    query: { username, token: 'secret_tokenx' },
  });
}

function createSocketChannel(socket: Socket): EventChannel<string> {
  return eventChannel((emit) => {
    socket.on('msgToClient', (message: string) => {
      emit(message);
    });
    return () => socket.disconnect();
  });
}

function* initializeSocket() {
  yield take('self/getSelfUserSuccess');
  const username = yield select(state=>state.self.infoUser.data.id);
  const socket: Socket = yield call(connectSocket, username);
  const socketChannel: EventChannel<string> = yield call(createSocketChannel, socket);

  yield takeEvery(socketChannel, function* (message: string) {
    yield put(receiveMessage(message));
  });

  yield takeLatest(sendMessage.type, function* (action: ReturnType<typeof sendMessage>) {
    const { recipient, text } = action.payload;
    socket.emit('msgToServer', { recipient, message: text });
  });
}

export default function* messageSaga() {
  yield initializeSocket(); // Call the WebSocket saga alongside your other sagas
}
