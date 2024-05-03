import React from 'react';
import { Modal as ModalAntd, ModalProps } from 'antd';

interface IProps {}
export const Modal: React.FC<ModalProps & IProps> = ({ ...rest }) => (
  <ModalAntd centered keyboard width={1000} {...rest} />
);
