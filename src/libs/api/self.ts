import api from './api';
import { IUser, ToastMessage } from '../types/auth';
import { BE_ENDPOINT } from '../../configs/constants/backend.const';

export const SelfUser = {
  getUser: async (data: IUser) => {
    const response = await api.get<ToastMessage>(
      `${BE_ENDPOINT.getUser}/${data.userId}`
    );
    return response.data;
  },
};
