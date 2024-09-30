import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from 'constants/config/activityStatuses';
import { RecentActivityFilterState } from 'components/nft-dashboard/recentActivity/RecentActivity';
import { Title } from '../RecentActivityFilter.styles';
import * as S from './RecentActivityStatusFilter.styles';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

interface RecentActivityStatusFilterProps {
  filters: RecentActivityFilterState;
  setFilters: (
    func: (state: RecentActivityFilterState) => RecentActivityFilterState,
  ) => void;
}

export const RecentActivityStatusFilter: React.FC<
  RecentActivityStatusFilterProps
> = ({ filters, setFilters }) => {
  const { t } = useTranslation();

  const options = useMemo(
    () =>
      activityStatuses.map((status) => ({
        label: t(status.title),
        value: status.name,
      })),
    [t],
  );

  return (
    <BaseRow gutter={[20, 20]}>
      <BaseCol span={24}>
        <Title>{t('nft.show')}</Title>
      </BaseCol>

      <BaseCol span={24}>
        <S.FilterCheckboxGroup
          value={filters.status}
          options={options}
          onChange={(checkedValues) =>
            setFilters((prev) => ({
              ...prev,
              status: checkedValues as unknown as string[],
            }))
          }
        />
      </BaseCol>
    </BaseRow>
  );
};
