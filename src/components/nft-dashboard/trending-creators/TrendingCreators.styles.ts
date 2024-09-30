import styled from 'styled-components';
import { BaseModal } from 'components/common/BaseModal/BaseModal';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { BREAKPOINTS, Media } from 'styles/themes/constants';

export const StoriesModal = styled(BaseModal)`
  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    top: 0;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-close {
    z-index: 999999;
    top: 1rem;

    color: ${({theme}) => theme.antd.colorTextSecondary};
  }
`;

export const ArrowBtn = styled(BaseButton)`
  color: var(--text-nft-light-color);
`;

export const CardWrapper = styled.div`
  margin: 0 0.40625rem;

  ${Media.xl()} {
    margin: 0 0.625rem;
  }
`;
