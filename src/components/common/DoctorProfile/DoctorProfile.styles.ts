import { FONT_WEIGHT, FONT_SIZE } from 'styles/themes/constants';
import styled from 'styled-components';
import { BaseTypography } from '../BaseTypography/BaseTypography';
import { BaseRate } from '../BaseRate/BaseRate';

export const Profile = styled.div`
  display: flex;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled(BaseTypography.Text)`
  display: flex;
  line-height: 1.25rem;
  font-weight: ${FONT_WEIGHT.semibold};
  font-size: ${FONT_SIZE.xs};

  color: var(--text-dark-color);
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.antd.colorPrimary};
`;

export const Rating = styled(BaseRate)`
  display: flex;
  line-height: 1.15;
`;
