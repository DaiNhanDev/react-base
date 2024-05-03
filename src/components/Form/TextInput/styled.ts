import styled from 'styled-components';

export const Lable = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const Wrapper = styled.div<{ width?: number | string }>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  padding: 8px 0;

  input {
    padding: 8px 16px;
    width: 100%;
    color: #323232;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #787878;
    background-color: ${({ theme }) => theme.background};
    border-color: #787878;
    border-radius: 10px;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 60%);
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    &:focus,
    &:hover {
      color: #323232;
      border-color: rgba(120, 120, 120, 0.3);
      outline: 0;
      box-shadow:
        inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 0 0.1rem rgb(120 120 120 / 25%);
    }
  }

  .ant-input {
    width: 100%;
    color: #323232;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #787878;
    background-color: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    &:focus,
    &:hover {
      color: #323232;
      border-color: rgba(120, 120, 120, 0.3);
      outline: 0;
      box-shadow:
        inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 0 0.1rem rgb(120 120 120 / 25%);
    }
  }

  input::placeholder {
    opacity: 0.4;
    color: #323232;
  }
`;
