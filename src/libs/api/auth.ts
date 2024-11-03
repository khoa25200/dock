import { IUser, ToastMessage, verifyAccount } from '../types/auth';
import api from './api';
import { BE_ENDPOINT } from '../../configs/constants/backend.const';
export const AccountUser = {
  // ACCOUNT FULL OPTIONS
  registerUser: async (data: IUser) => {
    const response = await api.post<ToastMessage>(BE_ENDPOINT.SignUp, data);
    return response.data;
  },
  verifyEmail: async (data: verifyAccount) => {
    const response = await api.post<ToastMessage>(
      BE_ENDPOINT.VerifyByEmail,
      data
    );
    return response.data;
  },
  loginUser: async (data: IUser) => {
    const response = await api.post<ToastMessage>(BE_ENDPOINT.Login, data);
    return response.data;
  },
  // ACCOUNT WITH EMAIL
  registerWithEmail: async (data: IUser) => {
    const response = await api.post<ToastMessage>(
      BE_ENDPOINT.SignUpWithEmail,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
  requestOtp: async (data: verifyAccount) => {
    const response = await api.post<ToastMessage>(
      BE_ENDPOINT.requestOtp,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
  loginUserWithOTP: async (data: verifyAccount) => {
    const response = await api.post<ToastMessage>(
      BE_ENDPOINT.loginUserWithOTP,
      data
    );
    return response.data;
  },

  //User
  getUser: async (data: IUser) => {
    const response = await api.get(`${BE_ENDPOINT.getUser}/${data.userId}`);
    return response.data;
  },
};
