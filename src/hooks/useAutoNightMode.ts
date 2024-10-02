import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { Dates } from 'constants/Dates';
import { msToH } from 'utils/utils';
import { useThemeSlice } from 'slices';

const getNextTime = (ms: number) => {
  const now = Date.now();
  const clearDate = Dates.getClearDate();
  const nextTime = clearDate.add(ms, 'ms');

  const delta = +nextTime - now;

  return delta < 0 ? delta + 24 * 3600 * 1000 : delta;
};

const isNight = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();

  let now = Dates.getToday();

  if (nightTime[0] < nightTime[1]) {
    return now.isBetween(
      clearDate.add(nightTime[0], 'ms'),
      clearDate.add(nightTime[1], 'ms'),
      null,
      '[)',
    );
  } else {
    now =
      now.hour() < msToH(nightTime[0]) ? now.add(24 * 3600 * 1000, 'ms') : now;
    return now.isBetween(
      clearDate.add(nightTime[0], 'ms'),
      clearDate.add(nightTime[1] + 24 * 3600 * 1000, 'ms'),
      null,
      '[)',
    );
  }
};

let timeoutNightStarts: null | ReturnType<typeof setTimeout> = null;
let timeoutNightEnds: null | ReturnType<typeof setTimeout> = null;

export const useAutoNightMode = (): void => {
  const { isNightMode, nightTime } = useAppSelector((state) => state.nightMode);
  const { themeKey, changeTheme } = useThemeSlice();

  useEffect(() => {
    timeoutNightStarts && clearTimeout(timeoutNightStarts);
    timeoutNightEnds && clearTimeout(timeoutNightEnds);

    if (isNightMode) {
      if (isNight(nightTime)) {
        changeTheme('dark');
      } else {
        changeTheme('light');
      }

      const runTimeoutStart = () => {
        changeTheme('dark');
        timeoutNightStarts = setTimeout(runTimeoutStart, 24 * 3600 * 1000);
      };

      const nextStartTime = getNextTime(nightTime[0]);

      timeoutNightStarts = setTimeout(runTimeoutStart, nextStartTime);

      const runTimeoutEnd = () => {
        changeTheme('light');
        timeoutNightEnds = setTimeout(runTimeoutEnd, 24 * 3600 * 1000);
      };

      let nextEndTime = getNextTime(nightTime[1]);
      nextEndTime =
        nextStartTime > nextEndTime
          ? nextEndTime + 24 * 3600 * 1000
          : nextEndTime;

      timeoutNightEnds = setTimeout(runTimeoutEnd, nextEndTime);
    }

    return () => {
      timeoutNightStarts && clearTimeout(timeoutNightStarts);
      timeoutNightEnds && clearTimeout(timeoutNightEnds);
    };
  }, [isNightMode, nightTime]);
};
