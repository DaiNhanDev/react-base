import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { GithubRepoForm } from './GithubRepoForm';
import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { List, Feature, Content, SubTitle } from './styled';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const { common } = translations;
  return (
    <List>
      <Feature>
        <StateIcon className="feature-icon" />
        <Content>
          <SubTitle>Predictable State</SubTitle>
          <GithubRepoForm />
        </Content>
      </Feature>
      <Feature>
        <CSSIcon className="feature-icon" />
        <Content>
          <SubTitle>Next Generation CSS</SubTitle>
          <ThemeSwitch />
        </Content>
      </Feature>
      <Feature>
        <INTLIcon className="feature-icon" />
        <Content>
          <SubTitle>{t(common.selectLanguage)} </SubTitle>
          <LanguageSwitch />
        </Content>
      </Feature>
    </List>
  );
};
