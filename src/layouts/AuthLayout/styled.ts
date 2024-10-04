import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';
// import { BaseForm } from 'components/common/Forms/BaseForm/BaseForm';
// import { BaseInput as CommonInput } from 'components/common/Inputs/BaseInput';
// import { InputPassword as CommonInputPassword } from 'components/common/Inputs/InputPassword';
import loginBackground from 'assets/images/login-bg.webp';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, Media } from 'styles';
// import { BaseCheckbox } from 'components/common/BaseCheckbox/BaseCheckbox';
// import { BaseButton } from 'components/common/BaseButton/BaseButton';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBackground});
  background-size: cover;
  position: relative;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
