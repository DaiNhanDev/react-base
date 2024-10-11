import { Input, InputProps } from 'antd';
import React, { CSSProperties, useMemo } from 'react';
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import { BaseLabel, ErrorLabel } from 'components/Common';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './styled';

interface FormInputProps extends UseControllerProps {
  label?: string;
  required?: boolean;
  wrapperStyle?: CSSProperties;
  width?: number | string;
}

export const TextInput: React.FC<FormInputProps & InputProps> = ({
  label,
  name,
  rules,
  required = false,
  defaultValue = '',
  wrapperStyle = {},
  width,
  ...rest
}) => {
  const { t, i18n } = useTranslation();
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  const textLabel = () => {
    if (!label) return <span />;
    if (!!label && required) {
      return (
        <BaseLabel>
          {label}
          <span>*</span>
        </BaseLabel>
      );
    }
    return <BaseLabel>{label}</BaseLabel>;
  };
  const translateError = useMemo(() => {
    if (!!error && error.message && error.type?.includes('required'))
      return t(error.message, { field: t(name as any) });

    if (!!error && error.message && !error.type?.includes('required'))
      return t(error.message);

    return null;
  }, [error, i18n.language]);

  return (
    <Wrapper style={wrapperStyle} width={width}>
      {textLabel()}
      <Input
        type="text"
        status={error ? 'error' : ''}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {!!error && <ErrorLabel>{translateError}</ErrorLabel>}
    </Wrapper>
  );
};
