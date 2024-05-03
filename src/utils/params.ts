import { ListParams } from 'types';

export const listParams = (params: ListParams) =>
  Object.keys(params).reduce(
    (accumulator, current) => `${current}=${params[current]}&${accumulator}`,
    '',
  );
