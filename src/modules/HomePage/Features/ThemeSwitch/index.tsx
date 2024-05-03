import * as React from 'react';
import { FormLabel } from 'components/FormLabel';
import { Radio } from 'components/Radio';
import styled from 'styled-components';
import { saveTheme } from 'styles/theme/utils';
import { useThemeSlice } from 'slices';
import { ThemeKeyType } from 'slices/theme/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
const Themes = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;

export function ThemeSwitch() {
  const { changeTheme, themeKey } = useThemeSlice();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    console.log('=======> value: ', value);

    saveTheme(value);
    changeTheme(value);
  };

  return (
    <Wrapper>
      <FormLabel>Select Theme</FormLabel>
      <Themes>
        <Radio
          id="system"
          label="System theme"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="system"
          isSelected={themeKey === 'system'}
        />
        <Radio
          id="light"
          label="Light"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="light"
          isSelected={themeKey === 'light'}
        />
        <Radio
          id="dark"
          label="Dark"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="dark"
          isSelected={themeKey === 'dark'}
        />
      </Themes>
    </Wrapper>
  );
}
