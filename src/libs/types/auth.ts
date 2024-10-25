export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface verifyAccount {
  otp: string;
  email: string;
}

export interface ToastMessage {
  data?: IUser;
  status: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
}
