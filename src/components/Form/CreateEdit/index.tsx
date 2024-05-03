import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 64px;
  box-sizing: content-box;
  align-items: flex-end;
  border: 1px solid #787878;
  border-radius: 10px;
  box-shadow:
    inset 0 1px 1px rgb(0 0 0 / 8%),
    0 0 0 0.1rem rgb(120 120 120 / 25%);
  padding: 16px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

interface IProps {
  onSubmit: () => void;
  children: JSX.Element[];
}

export const CreateEdit: React.FC<IProps> = ({ onSubmit, children }) => {
  return (
    <Wrapper>
      <Form>{children}</Form>
      <Button
        style={{ marginTop: 16, width: 120 }}
        type="primary"
        onClick={onSubmit}
      >
        Save
      </Button>
    </Wrapper>
  );
};
