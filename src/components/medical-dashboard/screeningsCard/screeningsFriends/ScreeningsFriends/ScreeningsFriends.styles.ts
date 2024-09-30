import styled, { css } from 'styled-components';
import { dashboardPaddings } from 'components/medical-dashboard/DashboardCard/DashboardCard';
import { Media } from 'styles/themes/constants';

interface WrapperProps {
  $isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.9375rem;
  transition: all 0.3s ease;

  background-color: var(--background-color);

  box-shadow: var(--box-shadow);

  ${Media.md()} {
    padding: 1.25rem;

    margin: ${dashboardPaddings.md[0]}px ${dashboardPaddings.md[1]}px;
  }

  ${Media.xl()} {
    position: absolute;
    width: 25rem;
    height: 100%;
    margin: 0;
    z-index: 2;

    background-color: rgba(var(--background-rgb-color), 0.9);

    ${(props) =>
      !props.$isOpen &&
      css`
        width: 5rem;
      `}
  }
`;
