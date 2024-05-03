import { Repo } from 'types/Repo';
import { UserModel } from 'models';

/* --- STATE --- */
export interface GithubRepoFormState {
  username: string;
  loading: boolean;
  error?: RepoErrorType | null;
  repositories: Repo[];
  users: UserModel[];
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}
