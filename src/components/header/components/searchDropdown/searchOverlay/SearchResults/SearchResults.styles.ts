import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
  & > div {
    font-size: 0.875rem;

    & .ant-list-header {
      font-size: 0.75rem;
      padding-bottom: 6px;

      color: ${({ theme }) => theme.antd.colorPrimary};

      ${Media.md()} {
        font-size: 0.875rem;
      }
    }

    & .ant-list-items {
      padding-left: 0.5rem;
    }
  }
`;

export const Text = styled(BaseTypography.Text)`
  color: var(--text-main-color);

  &:hover {
    text-decoration: underline;
  }
`;
