import userReducer from './User/slice';
import { UsersStateType } from './User/types';
import usersReducer from './User/slice';

export type StateType = {
  users: UsersStateType;
};

const rootReducers = {
  users: usersReducer,
};

export default rootReducers;
