import React from 'react';
import { DropdownCollapse } from 'components/header/Header.styles';
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { useAppSelector } from 'hooks/reduxHooks';
import * as S from './SettingsOverlay.styles';

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  // const { isPWASupported, event } = useAppSelector((state) => state.pwa);

  return (
    <S.SettingsOverlayMenu {...props}>
      <DropdownCollapse
        bordered={false}
        expandIconPosition="end"
        ghost
        defaultActiveKey="themePicker"
      >
        <DropdownCollapse.Panel
          header={t('header.changeLanguage')}
          key="languagePicker"
        >
          <LanguagePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel
          header={t('header.changeTheme')}
          key="themePicker"
        >
          <ThemePicker />
        </DropdownCollapse.Panel>
      </DropdownCollapse>
      {/* {isPWASupported && (
        <S.PwaInstallWrapper>
          <BaseButton
            block
            type="primary"
            onClick={() =>
              event && (event as BeforeInstallPromptEvent).prompt()
            }
          >
            {t('common.pwa')}
          </BaseButton>
        </S.PwaInstallWrapper>
      )} */}
    </S.SettingsOverlayMenu>
  );
};
