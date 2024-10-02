import React from 'react';
import { DropdownCollapse } from 'components/header/Header.styles';
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import * as S from './SettingsOverlay.styles';

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

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
    </S.SettingsOverlayMenu>
  );
};
