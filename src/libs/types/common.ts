export interface IListResponse {
  data: AccountResponse;
  message: string;
  status: string;
}
export interface AccountResponse {
  access_token?: string | undefined;
  userId?: string | undefined;
}
