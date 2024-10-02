import styled from 'styled-components';
import { LAYOUT, Media } from 'styles/themes/constants';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

const {
  desktop: { paddingVertical, paddingHorizontal, headerHeight },
} = LAYOUT;
export const RightSideCol = styled(BaseCol)`
  padding: ${paddingVertical} ${paddingHorizontal};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${headerHeight});
  background-color: var(--sider-background-color);
  overflow-y: auto;
`;

export const LeftSideCol = styled(BaseCol)`
  ${Media.xl()} {
    padding: ${paddingVertical} ${paddingHorizontal};
    height: calc(100vh - ${headerHeight});
    overflow: auto;
  }
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;

  background: black;

  min-height: 300px;
  overflow-y: auto;
`;

export const Item = styled.div`
  background: red;
  height: 150px;
  flex-shrink: 0;
`;
