import React, { useMemo, useState } from 'react';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './styled';
import { SiderLogo } from '../SiderLogo';
import SiderMenu from '../SiderMenu';

interface MainSiderProps {}

const MainSider: React.FC<MainSiderProps> = ({
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(
    () => mobileOnly && tabletOnly,
    [mobileOnly, tabletOnly],
  );

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
    </>
  );
};

export default MainSider;
