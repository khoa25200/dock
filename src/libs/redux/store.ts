import authReducer from './auth/authSlice';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import selfUserReducer from './self/selfSlice';
import channelReducer from './channel/channelSlice';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'self', 'channel'],
};
const rootReducer = combineReducers({
  auth: authReducer,
  self: selfUserReducer,
  channel: channelReducer,
});
// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
