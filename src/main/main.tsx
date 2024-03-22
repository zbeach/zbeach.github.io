import styled from 'styled-components';
import { Header } from '../header';
import { Body } from './body';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--secondary-color);
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = () => (
  <Style>
    <Header variant='big' />
    <Centered>
      <Body />
    </Centered>
  </Style>
);
