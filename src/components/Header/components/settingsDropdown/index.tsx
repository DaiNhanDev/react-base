import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { HeaderActionWrapper } from 'components/Header/styled';
import { SettingsOverlay } from './settingsOverlay/SettingsOverlay';
import { BasePopover, BaseButton } from 'components';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover
      content={<SettingsOverlay />}
      trigger="click"
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <BaseButton
          type={isOpened ? 'primary' : 'text'}
          icon={<SettingOutlined />}
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
