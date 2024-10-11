import styled from 'styled-components';
import { BaseCollapse, BaseCard } from 'components/Common';

export const Card = styled(BaseCard)`
  width: 100%;

  .ant-card-body {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CollapseWrapper = styled(BaseCollapse)`
  width: 40rem;
`;
