export interface SelfResponse {
  data: SelfUser;
  message: string;
  status: string;
}
export interface SelfUser {
  id: string;
  phoneNumber: string;
  lastName: string;
  firstName: string;
  avatarURL: string;
  online: boolean;
  email: string;
  username: string;
  id: string;
}
