import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
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
  display: flex;
  width: 45%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
