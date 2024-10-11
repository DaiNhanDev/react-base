import styled from 'styled-components';

export const BaseLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.app.primary};

  span {
    color: ${({ theme }) => theme.antd.colorError};
    margin-left: 2px;
  }
`;


export const ErrorLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.antd.colorError};  
`;
