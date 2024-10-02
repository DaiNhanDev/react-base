import styled from 'styled-components';
import { NFTCard } from 'components/nft-dashboard/common/NFTCard/NFTCard';
import { FONT_SIZE, Media, FONT_FAMILY } from 'styles/themes/constants';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';

export const ActivityCard = styled(NFTCard)`
  box-shadow: var(--box-shadow-nft-secondary-color);
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1.625rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  width: 1.4375rem;
  height: 1.4375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.antd.colorTextSecondary};

  background-color: ${({ theme }) => theme.antd.colorPrimary};

  font-size: ${FONT_SIZE.xs};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const InfoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const InfoBottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.xs};

    ${Media.xl()} {
      font-size: ${FONT_SIZE.md};
    }
  }
`;

export const Text = styled(BaseTypography.Text)`
  display: block;

  font-size: ${FONT_SIZE.xxs};

  color: var(--text-nft-light-color);

  font-family: ${FONT_FAMILY.secondary};

  ${Media.xl()} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const DateText = styled(Text)`
  font-style: italic;

  font-family: ${FONT_FAMILY.main};
`;
