import { TableProps } from 'antd';

export interface Results<T> {
  results: T[];
}

export interface Paginate {
  page: number;
  limit: number;
  total: number;
}

export interface FilterParams {
  orderBy?: string | null;
  search?: string | null;
}

export interface ListParams extends FilterParams {
  page: number;
  limit: number;
}

export interface ListData<T> extends Results<T> {
  paginate: Paginate;
}

export type TableRowSelection<T> = TableProps<T>['rowSelection'];
