import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from 'components/common/Inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from 'components/common/Forms/BaseButtonsForm/BaseButtonsForm';

export const AddressItem: React.FC<{ number: number }> = ({ number }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name={`address${number}`}
      label={`${t('common.address')} ${number}`}
    >
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
