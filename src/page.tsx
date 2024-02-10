import styled from 'styled-components';
import { Header } from './header';
import { PageBody } from './page-body';
import { UnderConstruction } from './under-construction';
import { Content } from './content';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--primary-color);
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page = () => (
  <Style>
    <Header />
    <Centered>
      <PageBody />
    </Centered>

    <UnderConstruction />
  </Style>
);
