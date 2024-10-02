import styled from 'styled-components';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { BaseForm } from 'components/common/Forms/BaseForm/BaseForm';
import { FONT_SIZE, FONT_WEIGHT } from 'styles/themes/constants';

export const UserList = styled(BaseForm.Item)`
  & label {
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.semibold};
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.antd.colorPrimary};
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const User = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-left: 0.5rem;
`;

export const AddUserButton = styled(BaseButton)`
  margin: 0 0.5rem;
`;
