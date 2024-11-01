export interface SelfResponse {
  data: SelfUser;
  message: string;
  status: string;
}
export interface SelfUser {
  phoneNumber: string;
  lastName: string;
  firstName: string;
  avatarURL: string;
  online: boolean;
  email: string;
  username: string;
}