import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex; */
  padding: 16px;
  display: flex;
  gap: 8px;
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
  width: 30%;
  height: 30%;
`;

const Infomation = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* height: 480px; */
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
  width: 30%;
  flex-direction: column;
  gap: 16px;
  /* justify-content: center;
  align-items: center; */
  /* background: ${({ theme }) => theme.btnPrimary}; */
`;

export { Wrapper, Title, Login, Left, Form, Right, Infomation };
