import * as React from 'react';
import { Button, Flex } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchOutlined } from '@ant-design/icons';

export const HomePage: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
    mode: 'all',
  });
  return (
    <FormProvider {...form}>
      <Flex gap={24}>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </Flex>
    </FormProvider>
  );
};
