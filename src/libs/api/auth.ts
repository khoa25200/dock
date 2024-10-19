import { verify } from 'crypto';
import { IUser, verifyAccount } from '../types/auth';
import api from './api';

export const AccountUser = {
  registerUser: async (data: IUser) => {
    const response = await api.post<IUser>('/sign-up', data);
    return response.data;
  },
  verifyEmail: async (data: verifyAccount) => {
    const response = await api.post<verifyAccount>('/verify-email', data);
    return response.data;
  },
  loginUser: async (data: IUser) => {
    const response = await api.post<IUser>('/sign-in', data);
    return response.data;
  },
};
