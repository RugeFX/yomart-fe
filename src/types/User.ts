export enum Role {
  USER = "USER",
  SELLER = "SELLER",
  ADMIN = "ADMIN",
}

export default interface IUser {
  id: string;
  username: string;
  password: string;
  role: Role;
  created_at: Date | string;
  updated_at: Date | string;
}
