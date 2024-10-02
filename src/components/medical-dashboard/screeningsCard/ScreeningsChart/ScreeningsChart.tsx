import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BaseChart,
//  getDefaultTooltipStyles,
} from 'components/common/Charts/BaseChart';
import { hexToRGB } from 'utils/utils';
import { getMarkAreaData } from 'utils/utils';
import { ChartSeriesData } from 'interfaces/interfaces';
import { useAppSelector } from 'hooks/reduxHooks';
import { useThemeSlice } from 'slices';

interface StatisticsData {
  day: number;
  value: string | number;
}

interface UserStatistics {
  name: string;
  data: StatisticsData[];
}

interface ScreeningsChartProps {
  firstUser?: UserStatistics;
  secondUser?: UserStatistics;
}

const xAxisData = Array.from({ length: 16 }, (_, i) => i + 1);

export const ScreeningsChart: React.FC<ScreeningsChartProps> = ({
  firstUser,
  secondUser,
}) => {
  const { themeKey } = useThemeSlice();

  const { t } = useTranslation();

  const option = {
    color: [
      // themeObject[theme].chartPrimaryGradient,
      // themeObject[theme].chartSecondaryGradient,
    ],
    tooltip: {
      // ...getDefaultTooltipStyles(themeObject[theme]),
      trigger: 'axis',
      formatter: (series: ChartSeriesData) => {
        const firstUser = series[1];
        const secondUser = series[0];

        const firstUserData = firstUser.data;
        const secondUserData = secondUser.data;

        return `${firstUser.seriesName}: ${firstUserData.value}%  - ${t('common.day')} ${firstUserData.day} <br/>
                ${secondUser.seriesName}: ${secondUserData.value}% - ${t('common.day')} ${secondUserData.day}
        `;
      },
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    xAxis: [
      {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
      },
    ],
    yAxis: [
      {
        show: false,
        type: 'value',
        min: 0,
        max: 100,
      },
    ],
    series: [
      {
        name: `${firstUser?.name}`,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          // color: themeObject[theme].chartColor1,
        },
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: firstUser?.data,
        markArea: {
          itemStyle: {
            // color: `rgba(${hexToRGB(themeObject[theme].chartColor1)}, 0.01)`,
          },
          data: getMarkAreaData(xAxisData),
        },
      },
      {
        name: `${secondUser?.name}`,
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2,
          // color: themeObject[theme].chartColor5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: secondUser?.data,
        markArea: {
          itemStyle: {
            // color: `rgba(${hexToRGB(themeObject[theme].chartColor1)}, 0.01)`,
          },
          data: getMarkAreaData(xAxisData),
        },
      },
    ],
  };

  return <BaseChart option={option} />;
};
