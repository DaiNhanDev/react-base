// import { KEYS, storage } from '@/utils';
import { AxiosError } from 'axios';

export interface ErrorState {
  error: AxiosError | null;
}
