import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex; */
  padding: 16px;
  display: flex;
`;

const Title = styled.div`
  font-weight: bold;
  color: ${(p) => p.theme.white};
  font-size: 2rem;
  padding: 32px;
`;

const Login = styled.span`
  font-weight: bold;
  color: ${(p) => p.theme.text};
  font-size: 2rem;
`;

const Left = styled.div`
  width: 480px;
  height: 480px;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 32px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.btnPrimary};
`;

export { Wrapper, Title, Login, Left, Form, Right };
