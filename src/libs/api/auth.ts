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
  // ACCOUNT WITH EMAIL
  registerWithEmail: async (data: IUser) => {
    const response = await api.post<IUser>('/sign-up-email', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
  requestOtp: async (data: verifyAccount) => {
    const response = await api.post<verifyAccount>('/request-otp', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
};
