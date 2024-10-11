import { TableProps as TablePropsAntd, Table as BaseTable } from 'antd';
// import { Table } from './styled';

// export { Table as BaseTable  } from './styled';
export interface TableProps<T> extends TablePropsAntd<T> {}
export { BaseTable };
// export const BaseTable: React.FC<TablePropsAntd> = (props) => (
//   <Table<any> {...props} />
// );
