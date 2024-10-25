interface IRoute {
  [key: string]: string;

  HOMEPAGE: string;
  PROFILE: string;
  ABOUT: string;
  SIGNUP: string;
  SIGNIN: string;
  VERIFY: string;
  SIGNIN_OTP: string;
  CHAT: string;
}

export const ROUTES: IRoute = {
  /**Admin, Staff, User */
  HOMEPAGE: '',
  PROFILE: 'profile',
  ABOUT: 'about',
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  VERIFY: 'verify',
  SIGNIN_OTP: 'sign-in-otp',
  CHAT: 'chat',
};
