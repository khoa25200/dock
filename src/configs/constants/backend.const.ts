export const BACKEND_BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL || 'http://47.129.183.26:8080';

export const BE_ENDPOINT = {
  // REGISTER
  SignUp: '/auth/sign-up',
  SignUpWithEmail: '/auth/sign-up-email',

  // LOGIN
  Login: '/auth/sign-in',
  loginUserWithOTP: '/auth/sign-in-email',

  // Get OTP replace for password
  requestOtp: '/auth/request-otp',
  registerWithEmail: '/auth/sign-up-email',

  // Authentication before using email
  VerifyByEmail: '/auth/verify-email',
};
