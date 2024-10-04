import React, { useEffect, useRef } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { BaseButton, RequireFullscreen } from 'components/Common';
import { HeaderActionWrapper } from '../../styled';

export const HeaderFullscreen: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.getElementById('root');
  }, []);

  return (
    <RequireFullscreen component={rootRef}>
      {(isFullscreen) => (
        <HeaderActionWrapper>
          <BaseButton
            type={isFullscreen ? 'primary' : 'text'}
            icon={
              isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />
            }
          />
        </HeaderActionWrapper>
      )}
    </RequireFullscreen>
  );
};
