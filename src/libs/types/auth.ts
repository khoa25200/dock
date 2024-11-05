export interface IUser {
  username?: string;
  email?: string;
  password?: string;
  userId?: string;
  data?: string[] | undefined;
}

export interface verifyAccount {
  otp: string;
  email: string;
}

export interface ToastMessage {
  data?: IUser;
  status?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
}
