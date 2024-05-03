import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button, Password, TextInput } from 'components';
import { LOGO } from 'assets';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'slices';
import { Wrapper, Title, Login, Left, Form, Right } from './styled';
import scheme from './schema';

interface FormValues {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const { login } = useAuth();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
    mode: 'onSubmit',
    resolver: yupResolver(scheme),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <FormProvider {...form}>
        <Wrapper>
          <Left>
            <img
              src={LOGO}
              alt="logo"
              style={{ width: 240, height: 240, borderRadius: 12 }}
            />
            <Form>
              <Login>Login</Login>
              <TextInput
                wrapperStyle={{ width: '75%' }}
                name="email"
                label="Email"
                placeholder="Email"
                required
              />
              <Password
                wrapperStyle={{ width: '75%' }}
                placeholder="Password"
                name="password"
                label="Password"
                required
              />
              <Button
                style={{ marginTop: 16 }}
                type="default"
                onClick={form.handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </Form>
          </Left>
          <Right>
            <Title>We are NextCargo Team</Title>
            <Title>
              Mã Tracking là dãy số của đơn vị vận chuyển cung cấp lúc gửi hàng
              đến công ty.
            </Title>
            <TextInput
              wrapperStyle={{ width: '60%' }}
              name="email"
              label="Tim kiem Tracing"
            />
            <Button
              style={{ marginTop: 16 }}
              // type="outline"
              onClick={form.handleSubmit(onSubmit)}
            >
              Tim Kiem
            </Button>
          </Right>
        </Wrapper>
      </FormProvider>
    </>
  );
};
