import { SearchOutlined } from '@ant-design/icons';
// import Media from '@themes/media';
import { Input, InputProps } from 'antd';
import React, { CSSProperties, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SearchStyled = styled(Input)`
  width: 100%;
  color: #323232;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.white};
  border-radius: 23px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  box-shadow: none;
  height: 46px;
  padding: 4px 16px;
  .ant-input-affix-wrapper {
    border-radius: 10px;
    &:focus,
    &:hover {
      color: #323232;
      border: none !important;
      outline: 0;
      box-shadow: none;
    }
  }
  &:focus,
  &:hover {
    color: #323232;
    outline: 0;
    box-shadow: none;
  }

  .ant-input {
    border-radius: 0;
    &:focus,
    &:hover {
      color: #323232;
      outline: 0;
      box-shadow: none;
    }
  }
  .ant-input-suffix {
    .search {
      padding-left: 8px;
      padding-right: 8px;
      cursor: pointer;
      font-size: 20px;
      color: #1677ff;
    }
  }
`;

interface FormInputProps {
  wrapperStyle?: CSSProperties;
  onSearch: (search: string) => void;
  defaulValue?: string;
}

interface IFormInput {
  search: string;
}

export const Search: React.FC<FormInputProps & InputProps> = ({
  wrapperStyle = {},
  onSearch,
  defaulValue = '',
  ...rest
}) => {
  const { handleSubmit, control, setValue, watch } = useForm<IFormInput>({
    defaultValues: {
      search: '',
    },
  });
  const [search] = watch(['search']);

  useEffect(() => {
    setValue('search', defaulValue);
  }, [defaulValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    onSearch(data.search.trim());
  const onKeyPress = () => onSearch(search.trim());

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Wrapper className="search-wrapper" style={wrapperStyle}>
          <SearchStyled
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type="text"
            suffix={
              <SearchOutlined
                className="search"
                onClick={handleSubmit(onSubmit)}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            }
            onPressEnter={onKeyPress}
            {...rest}
          />
        </Wrapper>
      )}
      name="search"
    />
  );
};
