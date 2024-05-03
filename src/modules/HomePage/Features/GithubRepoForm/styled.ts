import styled from 'styled-components';
import { FormLabel } from 'components';

const Input = styled.input`
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 4px;
  color: ${(p) => p.theme.text};
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  outline: none;
  height: 2.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    font-weight: 300;
    color: ${(p) => p.theme.textSecondary};
  }

  &:focus {
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 0 0 3px
      ${(p) =>
        p.theme.primary.replace(
          /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
          'rgba$1,0.2)',
        )};
  }
`;

const TextButton = styled.button`
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  color: ${(p) => p.theme.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.4;
  }
`;

const Wrapper = styled.div`
  ${TextButton} {
    margin: 16px 0;
    font-size: 0.875rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${(p) => p.theme.text};
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;

const List = styled.div``;

export { List, FormGroup, ErrorText, InputWrapper, Wrapper, TextButton, Input };
