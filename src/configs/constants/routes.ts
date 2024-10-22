interface IRoute {
  [key: string]: string;

  HOMEPAGE: string;
  PROFILE: string;
  ABOUT: string;
  SIGNUP: string;
  SIGNIN: string;
  AUTH: string;
  CHAT: string;
}

export const ROUTES: IRoute = {
  /**Admin, Staff, User */
  HOMEPAGE: '',
  PROFILE: 'profile',
  ABOUT: 'about',
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  AUTH: 'verify/:email',
  SIGNIN_OTP: 'sign-in-otp',
  CHAT: 'chat',
};
