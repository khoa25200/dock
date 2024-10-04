interface IRoute {
  [key: string]: string;

  HOMEPAGE: string;
  PROFILE: string;
  ABOUT: string;
}

export const ROUTES: IRoute = {
  /**Admin, Staff, User */
  HOMEPAGE: '',
  PROFILE: 'profile',
  ABOUT: 'about',
};
