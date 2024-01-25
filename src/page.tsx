import styled from 'styled-components';
import { Header } from './header';
import { PageBody } from './page-body';
import { UnderConstruction } from './under-construction';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--primary-color);
`;

export const Page = () => (
  <Style>
    <Header />
    <PageBody />

    <UnderConstruction />
  </Style>
);
