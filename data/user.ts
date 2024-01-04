interface IUser {
  uuid: string;
  description: string;
  displayName: string;
  email: string;
  password: string;
  company: string;
  paymentAccountId: string;
  jwt?: string;
  activationToken?: string;
}
export { IUser };
