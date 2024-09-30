import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  AudioOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { BaseInput } from 'components/common/inputs/BaseInput/BaseInput';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import {
  BaseSelect,
  Option,
} from 'components/common/selects/BaseSelect/BaseSelect';
import { SearchInput } from 'components/common/inputs/SearchInput/SearchInput';
import { InputPassword } from 'components/common/inputs/InputPassword/InputPassword';
import { ClipboardInput } from 'components/common/inputs/ClipboardInput/ClipboardInput';
import { OpenURLInput } from 'components/common/inputs/OpenURLInput/OpenURLInput';
import * as S from 'pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from 'components/common/BaseCol/BaseCol';
import { BaseTooltip } from 'components/common/BaseTooltip/BaseTooltip';
import { BaseCascader } from 'components/common/BaseCascader/BaseCascader';

const InputsPage: React.FC = () => {
  const { t } = useTranslation();
  const [clipboardValue, setClipboardValue] = useState('@altence_team');
  const [newTabValue, setNewTabValue] = useState('https://altence.com');

  const selectBefore = (
    <BaseSelect defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </BaseSelect>
  );

  const selectAfter = (
    <BaseSelect defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </BaseSelect>
  );

  return (
    <>
      <PageTitle>{t('common.input')}</PageTitle>
      <BaseCol>
        <S.Card title={t('inputs.basic')}>
          <S.InputsWrapper>
            <BaseInput placeholder={t('inputs.basic')} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.sizes')}>
          <S.InputsWrapper>
            <BaseInput
              size="small"
              placeholder={t('inputs.small')}
              prefix={<UserOutlined />}
            />
            <BaseInput
              placeholder={t('inputs.default')}
              prefix={<UserOutlined />}
            />
            <BaseInput
              size="large"
              placeholder={t('inputs.large')}
              prefix={<UserOutlined />}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prePost')}>
          <S.InputsWrapper>
            <BaseInput
              addonBefore="http://"
              addonAfter=".com"
              defaultValue="mysite"
            />
            <BaseInput
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
            <BaseInput addonAfter={<SettingOutlined />} defaultValue="mysite" />
            <BaseInput
              addonBefore="http://"
              suffix=".com"
              defaultValue="mysite"
            />
            <BaseInput
              addonBefore={<BaseCascader placeholder="cascader" />}
              defaultValue="mysite"
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prefixSuffix')}>
          <S.InputsWrapper>
            <BaseInput
              placeholder={t('inputs.enterName')}
              prefix={<UserOutlined />}
              suffix={
                <BaseTooltip title={t('inputs.extra')}>
                  <InfoCircleOutlined />
                </BaseTooltip>
              }
            />
            <BaseInput prefix="￥" suffix="RMB" />
            <BaseInput prefix="￥" suffix="RMB" disabled />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.search')}>
          <S.InputsWrapper>
            <SearchInput placeholder={t('inputs.searchText')} allowClear />
            <SearchInput
              addonBefore="https://"
              placeholder={t('inputs.searchText')}
              allowClear
            />
            <SearchInput
              placeholder={t('inputs.searchText')}
              enterButton="Search"
              size="large"
              suffix={<AudioOutlined />}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.password')}>
          <S.InputsWrapper>
            <InputPassword
              placeholder={t('inputs.passwordText')}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.textarea')}>
          <S.InputsWrapper>
            <BaseInput.TextArea rows={4} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.func')}>
          <S.InputsWrapper>
            <ClipboardInput
              value={clipboardValue}
              placeholder={t('inputs.clipboard')}
              valueToCopy={clipboardValue}
              onChange={(e) => setClipboardValue(e.target.value)}
            />
            <OpenURLInput
              value={newTabValue}
              placeholder={t('inputs.openURL')}
              href={newTabValue}
              onChange={(e) => setNewTabValue(e.target.value)}
            />
          </S.InputsWrapper>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default InputsPage;
