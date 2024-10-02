import React from 'react';
import { BaseInput } from 'components/common/Inputs/BaseInput/BaseInput';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from 'components/common/Forms/BaseButtonsForm/BaseButtonsForm';

export const LastNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="lastName" label={t('common.lastName')}>
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
