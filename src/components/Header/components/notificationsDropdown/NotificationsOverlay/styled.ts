import styled from 'styled-components';
import { BaseButton, BaseTypography, BaseDivider } from 'components/Common';
import { Media } from 'styles';

export const NoticesOverlayMenu = styled.div`
  max-width: 15rem;

  ${Media.md()} {
    max-width: 25rem;
  }
`;

export const SplitDivider = styled(BaseDivider)`
  margin: 0 0.5rem;
`;

export const LinkBtn = styled(BaseButton)`
  &.ant-btn {
    padding: 0;
    font-size: 0.875rem;
    height: unset;
    line-height: unset;
  }
`;

export const Btn = styled(BaseButton)`
  width: 100%;
`;

export const Text = styled(BaseTypography.Text)`
  display: block;
  text-align: center;
`;
