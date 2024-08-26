import { UserModel } from 'models';

/* --- STATE --- */
export interface AuctionsState {
  loading: boolean;
  error?: RepoErrorType | null;
  categories: any[];
  products: any[];
  productDetail: any;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}
