import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from 'components/common/forms/BaseButtonsForm/BaseButtonsForm';
import {
  BaseSelect,
  Option,
} from 'components/common/selects/BaseSelect/BaseSelect';
import { languages } from 'constants/languages';
import { BaseSpace } from 'components/common/BaseSpace/BaseSpace';

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.name}>
    <BaseSpace align="center">
      <ReactCountryFlag svg countryCode={lang.countryCode} alt="country flag" />
      {lang.title}
    </BaseSpace>
  </Option>
));

export const LanguageItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="language"
      label={t('profile.nav.personalInfo.language')}
    >
      <BaseSelect>{languageOptions}</BaseSelect>
    </BaseButtonsForm.Item>
  );
};
