import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles';
import { useLanguage } from 'hooks/useLanguage';
import { BaseRadio } from 'components/common/BaseRadio/BaseRadio';
import { BaseSpace } from 'components/common/BaseSpace/BaseSpace';

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <BaseRadio.Group
      defaultValue={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <BaseSpace direction="vertical">
        <RadioBtn value="en">
          <BaseSpace align="center">
            English
            <ReactCountryFlag svg countryCode="GB" />
          </BaseSpace>
        </RadioBtn>
        <RadioBtn value="de">
          <BaseSpace align="center">
            Deutsch
            <ReactCountryFlag svg countryCode="DE" />
          </BaseSpace>
        </RadioBtn>
      </BaseSpace>
    </BaseRadio.Group>
  );
};
