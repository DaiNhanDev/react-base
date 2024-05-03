import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'components/Link';
import { NavBar } from 'components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${(p) => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${(p) => p.theme.textSecondary};
  margin: 0.625rem 0 1.5rem 0;
`;

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <Link to={`${process.env.PUBLIC_URL}/`}>Return to Home Page</Link>
      </Wrapper>
    </>
  );
};
