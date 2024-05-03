import styled from 'styled-components';

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${(p) => p.theme.text};
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${(p) => p.theme.textSecondary};
  margin: 0.625rem 0 1.5rem 0;
`;

export { Feature, Content, List, SubTitle, P };
