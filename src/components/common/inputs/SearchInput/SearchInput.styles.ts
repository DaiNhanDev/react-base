import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import { BaseInput } from '../BaseInput/BaseInput';
import { BaseSpace } from '../../BaseSpace/BaseSpace';

export const SearchInput = styled(BaseInput.Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 600;
    background-color: var(--background-color);

    ${Media.md()} {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: ${({ theme }) => theme.antd.colorPrimary};
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-search-button {
    &.ant-btn .anticon {
      color: ${({ theme }) => theme.antd.colorPrimary};
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 1px solid var(--border-color);
    color: ${({ theme }) => theme.antd.colorPrimary};
  }
`;

export const Space = styled(BaseSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
