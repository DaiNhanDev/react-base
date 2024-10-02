import React from 'react';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { References } from 'components/common/References/References';
// import { useResponsive } from 'hooks/useResponsive';
import { TrendingCreators } from 'components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from 'components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from 'components/nft-dashboard/trending-collections/TrendingCollections';
import { Balance } from 'components/nft-dashboard/Balance/Balance';
import { TotalEarning } from 'components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from 'components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from 'components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './styled';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

const Dashboard: React.FC = () => {
  //   const { isDesktop } = useResponsive();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        {/* <BaseRow gutter={[60, 60]}>
          <BaseCol span={24}>
            <TrendingCreators />
          </BaseCol>

          <BaseCol span={24}>
            <RecentlyAddedNft />
          </BaseCol>

          <BaseCol span={24}>
            <TrendingCollections />
          </BaseCol>

          <BaseCol span={24}>
            <RecentActivity />
          </BaseCol>
        </BaseRow>
        <References /> */}
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="balance">
          <Balance />
        </div>
        <S.Space />
        <div id="total-earning">
          <TotalEarning />
        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">
          <ActivityStory />
        </S.ScrollWrapper>
      </S.RightSideCol>
    </BaseRow>
  );

  //   const mobileAndTabletLayout = (
  //     <BaseRow gutter={[20, 24]}>
  //       <BaseCol span={24}>
  //         <TrendingCreators />
  //       </BaseCol>

  //       <BaseCol span={24}>
  //         <RecentlyAddedNft />
  //       </BaseCol>

  //       <BaseCol span={24}>
  //         <TrendingCollections />
  //       </BaseCol>

  //       <BaseCol span={24}>
  //         <RecentActivity />
  //       </BaseCol>
  //     </BaseRow>
  //   );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {/* {isDesktop ? desktopLayout : mobileAndTabletLayout} */}
      {desktopLayout}
    </>
  );
};

export default Dashboard;
