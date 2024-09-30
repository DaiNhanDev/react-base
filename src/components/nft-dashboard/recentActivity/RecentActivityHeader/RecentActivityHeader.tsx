import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { FilterIcon } from 'components/common/icons/FilterIcon';
import { BaseModal } from 'components/common/BaseModal/BaseModal';
import { NFTCardHeader } from 'components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { RecentActivityFilter } from 'components/nft-dashboard/recentActivity/recentActivityFilters/RecentActivityFilter';
import { RecentActivityFilterState } from 'components/nft-dashboard/recentActivity/RecentActivity';
import { useResponsive } from 'hooks/useResponsive';

interface RecentActivityHeaderProps {
  filters: RecentActivityFilterState;
  setFilters: (
    func: (state: RecentActivityFilterState) => RecentActivityFilterState,
  ) => void;
}

export const RecentActivityHeader: React.FC<RecentActivityHeaderProps> = ({
  filters,
  setFilters,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  return (
    <>
      <NFTCardHeader title={t('nft.recentActivity')}>
        {!isDesktop && (
          <BaseButton
            size="large"
            noStyle
            type="text"
            icon={<FilterIcon />}
            onClick={() => setModalOpen(true)}
          />
        )}
      </NFTCardHeader>

      {!isDesktop && (
        <BaseModal
          open={isModalOpen}
          onCancel={() => setModalOpen(false)}
          footer={null}
        >
          <RecentActivityFilter filters={filters} setFilters={setFilters} />
        </BaseModal>
      )}
    </>
  );
};
