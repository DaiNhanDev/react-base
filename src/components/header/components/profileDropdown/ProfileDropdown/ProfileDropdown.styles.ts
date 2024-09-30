import { DownOutlined } from '@ant-design/icons';
import { Media } from 'styles/themes/constants';
import styled from 'styled-components';
import { HeaderActionWrapper } from '../../../Header.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  ${Media.md()} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: ${({theme}) => theme.antd.colorTextSecondary};

  ${Media.md()} {
    color: var(--text-main-color);
  }
`;
