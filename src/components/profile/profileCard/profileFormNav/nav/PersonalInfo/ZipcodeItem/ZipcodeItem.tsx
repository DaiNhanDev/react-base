import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from 'components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from 'components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const ZipcodeItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="zipcode" label={t('common.zipcode')}>
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
