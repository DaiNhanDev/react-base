import React from 'react';
import {
  BaseForm,
  BaseFormInterface,
  BaseFormProps,
} from 'components/common/Forms/BaseForm/BaseForm';
import { BaseButtonsGroup } from 'components/common/Forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { BaseFormTitle } from 'components/common/Forms/components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from 'components/common/Forms/components/BaseFormItem/BaseFormItem';
import { BaseFormList } from 'components/common/Forms/components/BaseFormList/BaseFormList';

export interface BaseButtonsFormProps extends BaseFormProps {
  isFieldsChanged: boolean;
  setFieldsChanged?: (state: boolean) => void;
  footer?: React.ReactElement;
  loading?: boolean;
}

export const BaseButtonsForm: BaseFormInterface<BaseButtonsFormProps> = ({
  form,
  isFieldsChanged,
  setFieldsChanged,
  footer,
  loading = false,
  children,
  ...props
}) => {
  const [formDefault] = BaseForm.useForm();
  const currentForm = form || formDefault;

  const onCancel = () => {
    currentForm?.resetFields();
    setFieldsChanged && setFieldsChanged(false);
  };

  return (
    <BaseForm form={currentForm} {...props}>
      {children}
      {isFieldsChanged &&
        (footer || <BaseButtonsGroup loading={loading} onCancel={onCancel} />)}
    </BaseForm>
  );
};

BaseButtonsForm.Title = BaseFormTitle;
BaseButtonsForm.Item = BaseFormItem;
BaseButtonsForm.List = BaseFormList;
BaseButtonsForm.useForm = BaseForm.useForm;
BaseButtonsForm.Provider = BaseForm.Provider;
