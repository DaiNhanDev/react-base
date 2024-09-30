import { UserModel } from "domain/UserModel";

/* --- STATE --- */
export interface UserState {
  user: UserModel | null;
}

