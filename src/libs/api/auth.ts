import { IUser, verifyAccount } from '../types/auth';
import api from './api';

export const AccountUser = {
  // ACCOUNT FULL OPTIONS
  registerUser: async (data: IUser) => {
    const response = await api.post<IUser>('/auth/sign-up', data);
    return response.data;
  },
  verifyEmail: async (data: verifyAccount) => {
    const response = await api.post<verifyAccount>('/auth/verify-email', data);
    return response.data;
  },
  loginUser: async (data: IUser) => {
    const response = await api.post<IUser>('/auth/sign-in', data);
    return response.data;
  },
  // ACCOUNT WITH EMAIL
  registerWithEmail: async (data: IUser) => {
    const response = await api.post<IUser>('/auth/sign-up-email', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
  requestOtp: async (data: verifyAccount) => {
    const response = await api.post<verifyAccount>('/auth/request-otp', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
  loginUserWithOTP: async (data: verifyAccount) => {
    const response = await api.post<verifyAccount>('/auth/sign-in-email', data);
    return response;
  },
};
