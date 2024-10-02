import React from 'react';
import {
  BaseChart,
//  getDefaultTooltipStyles,
} from 'components/common/Charts/BaseChart';
import {
  ChartData,
  ChartSeriesData,
  CurrencyTypeEnum,
} from 'interfaces/interfaces';
import { formatNumberWithCommas, getCurrencyPrice } from 'utils/utils';
import { useAppSelector } from 'hooks/reduxHooks';
import { useThemeSlice } from 'slices';
// import { themeObject } from 'styles/themes/themeVariables';

interface LineData {
  data: ChartData;
}

interface TotalEarningChartProps {
  xAxisData: number[] | string[];
  earningData: LineData;
}

export const TotalEarningChart: React.FC<TotalEarningChartProps> = ({
  xAxisData,
  earningData,
}) => {
  // const { themeKey } = useThemeSlice();

  const option = {
    tooltip: {
      // ...getDefaultTooltipStyles(themeObject[theme]),
      trigger: 'axis',
      crossStyle: {
        color: 'red',
      },
      formatter: (data: ChartSeriesData) => {
        const currentSeries = data[0];

        return `${currentSeries.name} - ${getCurrencyPrice(
          formatNumberWithCommas(currentSeries.value),
          CurrencyTypeEnum.USD,
        )}`;
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
      },
    ],
    series: [
      {
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 3,
          // color: themeObject[theme].chartColor3,
        },
        emphasis: {
          focus: 'series',
        },
        data: earningData?.data,
      },
    ],
  };

  return <BaseChart option={option} width="100%" height={75} />;
};
