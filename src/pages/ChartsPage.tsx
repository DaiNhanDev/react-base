import React from 'react';
import { useTranslation } from 'react-i18next';
import { GradientStackedAreaChart } from 'components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { VisitorsPieChart } from 'components/charts/VisitorsPieChart';
import { BarAnimationDelayChart } from 'components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from 'components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from 'components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

const ChartsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.charts')}</PageTitle>
      <BaseRow gutter={[30, 30]}>
        <BaseCol id="line-race" xs={24}>
          <LineRaceChart />
        </BaseCol>
        <BaseCol id="gradient-stacked-area" xs={24}>
          <GradientStackedAreaChart />
        </BaseCol>
        <BaseCol id="bar-animation-delay" xs={24}>
          <BarAnimationDelayChart />
        </BaseCol>
        <BaseCol id="pie" xs={24} lg={12}>
          <VisitorsPieChart />
        </BaseCol>
        <BaseCol id="scatter" xs={24} lg={12}>
          <ScatterChart />
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default ChartsPage;
