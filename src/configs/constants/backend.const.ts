export const BACKEND_BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL || 'http://47.129.183.26:8080';

export const BE_ENDPOINT = {
  // REGISTER
  SignUp: '/auth/sign-up',
  SignUpWithEmail: '/auth/sign-up-email',

  // LOGIN
  Login: '/auth/sign-in',
  loginUserWithOTP: '/auth/sign-in-email',

  // Upload files
  uploadFiles: '/self/upload-files',

  // Get OTP replace for password
  requestOtp: '/auth/request-otp',
  registerWithEmail: '/auth/sign-up-email',

  // Authentication before using email
  VerifyByEmail: '/auth/verify-email',

  // Workspaces get all
  getWorkspaceOfSelf: '/workspaces/users',

  // Workspaces register
  createWorkspace: '/workspaces/users',

  // USER
  getUser: '/self',

  //Update User
  putUser: '/self/update-user',
  // Channels get all of workspace
  getChannelsOfWorkspace: '/channels/workspace',
  // Channels get follow id
  getChannelWithId: '/channels/workspace',
};
