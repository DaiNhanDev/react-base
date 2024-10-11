import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/Common';
import {
  FormWrapper,
  FormTitle,
  LoginDescription,
  SubmitButton,
} from './styled';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Password, TextInput } from 'components/Forms';
import scheme from './schema';
import { useAuth } from 'slices';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { authenticated, doLogin } = useAuth();
  const { t } = useTranslation();
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
    mode: 'all',
    resolver: yupResolver(scheme),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => doLogin(data);

  return (
    <>
      <PageTitle>{t('common.login')}</PageTitle>
      <FormProvider {...form}>
        <FormWrapper>
          <FormTitle>{t('common.login')}</FormTitle>
          <LoginDescription>{t('login.loginInfo')}</LoginDescription>
          <TextInput
            name="email"
            label={t('auth.sign_in.email_label')}
            placeholder={t('auth.sign_in.email_placeholder')}
            required
          />
          <div style={{ height: 16 }} />
          <Password
            name="password"
            label={t('auth.sign_in.password_label')}
            placeholder={t('auth.sign_in.password_placeholder')}
            required
          />
          <SubmitButton
            type="primary"
            size="large"
            onClick={form.handleSubmit(onSubmit)}
          >
            {t('common.login')}
          </SubmitButton>
        </FormWrapper>
      </FormProvider>
    </>
  );
};

export default LoginPage;
