import { AxiosError } from 'axios';

export interface ErrorState {
  error: AxiosError | unknown | null;
}
