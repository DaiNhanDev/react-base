import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loading: React.FC = () => (
  <Wrapper>
    <Spin size="large" />
  </Wrapper>
);

export default Loading;
