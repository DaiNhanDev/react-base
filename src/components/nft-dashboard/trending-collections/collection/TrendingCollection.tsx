import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from 'utils/utils';
import { TrendingActivity } from 'apis/activity.api';
import { CurrencyTypeEnum } from 'interfaces/interfaces';
import { BaseAvatar } from 'components/common/BaseAvatar/BaseAvatar';
import * as S from './TrendingCollection.styles';

export const TrendingCollection: React.FC<TrendingActivity> = ({
  title,
  owner,
  usd_value,
  image,
  avatar,
}) => {
  const { t } = useTranslation();

  return (
    <S.Card padding={0} $img={image}>
      <S.CollectionImage src={image} alt="nft" />
      <S.BidButton type="primary">{t('nft.bid')}</S.BidButton>
      <S.NftCollectionInfo>
        <S.AuthorAvatarWrapper>
          <BaseAvatar shape="circle" size={64} src={avatar} alt={owner} />
        </S.AuthorAvatarWrapper>
        <S.InfoRow>
          <S.Title level={5}>{title}</S.Title>
        </S.InfoRow>
        <S.InfoRow>
          <S.OwnerText>
            {t('nft.by')} {owner}
          </S.OwnerText>
          <S.USDText>
            {getCurrencyPrice(
              formatNumberWithCommas(usd_value),
              CurrencyTypeEnum.USD,
            )}
          </S.USDText>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </S.Card>
  );
};
