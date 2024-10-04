import { DownOutlined } from '@ant-design/icons';
import { Media } from 'styles';
import styled from 'styled-components';
import { HeaderActionWrapper } from '../../../styled';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  ${Media.md()} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: var(--text-secondary-color);

  ${Media.md()} {
    color: var(--text-main-color);
  }
`;
