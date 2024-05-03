export interface UserModel {
  id: number;
  email: string;
  name: string;
  birthday: string;
  compay_id: number | null;
  manager_id: number | null;
  store_id: number | null;
  role_id: number;
  createdAt: string;
  updatedAt: string;
}
