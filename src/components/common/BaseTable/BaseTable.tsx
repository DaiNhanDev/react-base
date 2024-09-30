/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableProps } from 'antd';
import * as S from './BaseTable.styles';
import { GetRowKey } from 'antd/es/table/interface';

// export type BaseTableProps<T> = TableProps<T>;
export interface BaseTableProps<T> extends TableProps<T> {
  rowKey?: string | GetRowKey<unknown> | undefined;
}
// TODO make generic!
export const BaseTable: React.FC<BaseTableProps<any>> = (props) => {
  return <S.Table {...props} />;
};
