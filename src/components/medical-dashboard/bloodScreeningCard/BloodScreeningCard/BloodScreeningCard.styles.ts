import styled from 'styled-components';
import { BaseCard } from 'components/common/BaseCard/BaseCard';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT } from 'styles/themes/constants';

export const BloodScreeningCard = styled(BaseCard)`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveItem = styled.div`
  background: #ecf6ff;
  height: 3.125rem;
  border-radius: ${BORDER_RADIUS};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.antd.colorPrimary};
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.semibold};
`;
